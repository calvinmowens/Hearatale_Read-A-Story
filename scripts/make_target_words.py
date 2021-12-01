import json
import os
import re
import random

NUM_QUIZ_CHOICES = 3
story_dir = "../src/stories/"
story_dirs = [story_dir + name for name in os.listdir(story_dir) if os.path.isdir(story_dir + name)]

all_words = [line.strip() for line in open("all_words.txt")]

def get_quiz_options(words):
    random.shuffle(all_words)
    for word in all_words:
        if word.startswith(words[0][0]) and word not in words:
            return word

for story in story_dirs:
    lines = [line.strip() for line in open(story + "/targetwords.txt").readlines()][1:]
    targetWords = []
    quiz = []

    for line in lines:
        if "=" not in line:
            continue

        word_def_pattern = "^(\S*)\s*=\s*(.*)$"
        variation_pattern = "\[\s*xxx\s*(.*)\]"

        a = re.search(word_def_pattern, line[0:line.index("[")] if "[" in line and "]" in line else line)
        if not a:
            continue
        word = a.group(1)
        defn = a.group(2)

        v = re.search(variation_pattern, line)
        if v:
            variation = v.group(1)
        else:
            variation = None

        blob = {
            "word": word.strip(),
            "variation": variation,
            "definition": defn.strip(),
            "audio": "../audio/" + word + ".mp3",
            "image": "../img/" + word + ".jpg"
        }

        quizWords = [word.strip()]
        answerOptions = []
        answerOptions.append({
            "answerText": word.strip(),
            "isCorrect": True
        })

        for _ in range(NUM_QUIZ_CHOICES - 1):
            answerOptions.append({
                "answerText": get_quiz_options(quizWords),
                "isCorrect": False
            })

            quizWords.append(answerOptions[-1]["answerText"])

        quizBlob = {
            "questionText": defn.strip(),
            "answerOptions": answerOptions,
            "audioPath": "../audio/" + word + ".mp3"
        }
        random.shuffle(quizBlob["answerOptions"])
        quiz.append(quizBlob)
        targetWords.append(blob)

    with open(story + "/targetwords.json", "w") as f:
        f.write(json.dumps(targetWords))

    with open(story + "/quiz.json", "w") as f:
        f.write(json.dumps(quiz))