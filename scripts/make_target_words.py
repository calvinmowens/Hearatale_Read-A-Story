import json
import os
import re

story_dir = "../src/stories/"
story_dirs = [story_dir + name for name in os.listdir(story_dir) if os.path.isdir(story_dir + name)]


for story in story_dirs:
    lines = [line.strip() for line in open(story + "/targetwords.txt").readlines()][1:]
    targetWords = []

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
            "definition": defn.strip()
        }

        targetWords.append(blob)

    with open(story + "/targetwords.json", "w") as f:
        f.write(json.dumps(targetWords))