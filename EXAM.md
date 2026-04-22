# Git & GitHub Proficiency Exam

**Rainbow IT — Internal Assessment**
**Duration:** 90 minutes
**Date:** April 22, 2026

---

## Rules

- **No direct pushes to `main`.** All changes to `main` must go through Pull Requests on GitHub.
- Use **conventional commit messages** throughout.
- Each commit should be **atomic** — one logical change per commit.
- Use proper **branch naming conventions**: choose appropriate prefixes and descriptive names.
- Stage files **individually**. Do NOT use `git add .`

---

## Task 0 — Command Log (mandatory, ongoing)

Before you begin any git work, create a file called `COMMANDS.md` in the project root.

Throughout the exam, log **every git command** you run into this file, in order — one command per line, with an optional short comment explaining why.

**Rules for COMMANDS.md:**

- This file must **NEVER be committed**. It must remain untracked at all times.
- After the exam, submit this file to the examiner on Slack.

*This task is mandatory but not scored directly. However, if `COMMANDS.md` is committed or missing, you lose marks elsewhere under "Selective staging".*

---

## Task 1 — Project Setup

1. Clone the repo using the URL provided by the examiner.
2. Enter the project directory.
3. Verify you are on the `main` branch.
4. Open `index.html` in a browser and confirm the calculator page loads correctly.

*This task is not scored. It's just setup.*

---

## Task 2 — Feature: Update Header Title & Background Color

1. Create and switch to an appropriately named branch from `main`.
2. In `index.html`, change the nav title from **"Rainbow IT - Calculator"** to **"Rainbow IT - Smart Calculator"**.
3. Commit this change with a proper conventional commit message.
4. In `style.css`, change the navbar background color from `#333` to `#1e88e5`.
5. Commit this change separately with a proper conventional commit message.

> These must be **two separate commits** — one for the HTML change, one for the CSS change.

Do NOT open a PR for this branch yet. You will come back to it in Task 4.

---

## Task 3 — Feature: Add a New Operation (modulo)

1. Switch back to `main`.
2. Create and switch to an appropriately named branch from `main`.
3. In `app.js`, add a new entry `modulo: (a, b) => a % b` to the `operations` object.
4. Commit this change with a proper conventional commit message.
5. In `index.html`, add a new `<option value="modulo">modulo</option>` inside the `#operation` `<select>`.
6. Commit this change **separately** with a proper conventional commit message.
7. Push the branch to the remote.
8. Open a Pull Request on GitHub into `main`.
9. Merge the PR — ensure a **merge commit** is created (not a squash or rebase merge).

> The `app.js` change and the `index.html` change must be **two separate commits**.

---

## Task 4 — Rebase Workflow

1. Switch to the branch you created in Task 2.
2. Rebase it onto the updated `main` (which now includes the modulo merge from Task 3). After the rebase, your Task 2 commits should sit on top of the latest `main`.
3. Push the branch to the remote (force-with-lease is acceptable here since the branch history was rewritten).
4. Open a Pull Request on GitHub into `main` and merge it.

---

## Task 5 — Merge Conflict Resolution

There is a pre-existing branch in the repo called `feature/update-header-test`. This branch modifies the same nav title and navbar color that overlap with your Task 2 changes.

If you try to open a PR from this branch into `main`, GitHub will report that it **cannot be automatically merged**. You must resolve the conflict locally first.

1. Check out the `feature/update-header-test` branch locally.
2. Merge `main` into it locally.
3. You **will** encounter merge conflicts. This is expected. Resolve them:
  - For the nav title: keep **your** version from Task 2 (`Rainbow IT - Smart Calculator`).
  - For the navbar color: keep the version from `feature/update-header-test` (`#2c3e50`).
4. Stage the resolved files and commit the merge with a proper message.
5. Push the updated branch to the remote.
6. Open a Pull Request on GitHub into `main` and merge it.

---

## Task 6 — Fix a Bug

A user reported that the calculator's **subtract** operation is returning wrong results — for example, `5 - 3` returns `8` instead of `2`. Your job is to track down the bug and ship a fix.

1. Switch to `main` and pull the latest changes.
2. Create and switch to an appropriately named bugfix branch from `main`.
3. Locate the bug in `app.js`. The `subtract` function is currently adding the two numbers instead of subtracting them. Fix it.
4. Commit your fix with a proper conventional commit message.
5. Push the branch to the remote.
6. Open a Pull Request on GitHub into `main` and merge it.

---

## Task 7 — Documentation

1. Switch to `main` and pull the latest changes.
2. Create and switch to an appropriately named branch from `main`.
3. Create a `README.md` file with the following:
  - Project name: **Rainbow IT - Calculator**
  - A one-line description of the project.
4. Commit with a proper conventional commit message.
5. Push the branch to the remote.
6. Open a Pull Request on GitHub into `main` and merge it.

---

## Submission

When you are done:

1. Run a command to view the full git log with graph and take a screenshot of the output.
2. Submit your `COMMANDS.md` file on Slack.
3. Notify the examiner that you are finished. The examiner will review your PRs on GitHub.

---

## Mark Scheme

Every scored subtask is worth **1 mark**. Partial credit of **0.5 marks** is awarded when the subtask is attempted but does not fully meet the criterion (see the partial-credit column on each row). Only real git / workflow / code subtasks are scored — trivial operations like `cd` into a directory, opening a file in a browser, or confirming you're on `main` are **not** scored.

### Task 2 — Header & Background (3 marks)

| # | Scored subtask | 1 mark (full credit) | 0.5 marks (partial credit) |
|---|----------------|----------------------|-----------------------------|
| 2.1 | Branch created from `main` | Branch created from `main` with a descriptive name AND proper prefix | Branch created but missing prefix, or branched from the wrong base |
| 2.2 | HTML nav-title change committed | Title changed to `Rainbow IT - Smart Calculator` AND committed alone with a conventional message | Change correct but commit message not conventional, OR bundled with the CSS change in one commit |
| 2.3 | CSS navbar background change committed separately | Navbar background changed to `#1e88e5` AND committed in a **separate** commit with a conventional message | Change correct but commit message not conventional, OR amended into the HTML commit |

### Task 3 — Add Modulo Operation (5 marks)

| # | Scored subtask | 1 mark | 0.5 marks |
|---|----------------|--------|-----------|
| 3.1 | Branch created from `main` | Descriptive branch name with proper prefix off latest `main` | Branch exists but missing prefix, or branched from the wrong base |
| 3.2 | `app.js` modulo entry committed | `modulo: (a, b) => a % b` added to `operations` AND committed alone with a conventional message | Code correct but commit message not conventional, OR bundled with the HTML change |
| 3.3 | `index.html` modulo option committed separately | `<option value="modulo">modulo</option>` added AND committed separately with a conventional message | Option added but committed together with `app.js`, OR commit message not conventional |
| 3.4 | PR opened into `main` | PR opened from the feature branch into `main` on GitHub | PR opened from the wrong base or with the wrong target |
| 3.5 | PR merged with a merge commit | Merged via **Create a merge commit** strategy (merge commit present in history) | Merged but using squash or rebase strategy |

### Task 4 — Rebase Workflow (3 marks)

| # | Scored subtask | 1 mark | 0.5 marks |
|---|----------------|--------|-----------|
| 4.1 | Task 2 branch rebased onto updated `main` | Clean `git rebase main`; Task 2 commits replayed on top of the modulo merge; linear history | Rebase attempted but conflicts left unresolved or `main` not pulled first |
| 4.2 | Rebased branch pushed to remote | Pushed with `--force-with-lease` (or equivalent) after rewriting history | Pushed with plain `--force`, or used a merge instead of a rebase to "sync" |
| 4.3 | PR opened and merged into `main` | PR opened from the rebased branch and merged into `main` | PR opened but merged with an unexpected strategy, or merged directly without a PR |

### Task 5 — Merge Conflict Resolution (5 marks)

| # | Scored subtask | 1 mark | 0.5 marks |
|---|----------------|--------|-----------|
| 5.1 | `main` merged into `feature/update-header-test` locally | `git merge main` run from the feature branch | Attempted from the wrong direction (merging the feature branch into `main` locally) |
| 5.2 | Nav title conflict resolved correctly | Kept `Rainbow IT - Smart Calculator` (your Task 2 version) | Kept a stale or hand-edited title that isn't the Task 2 one |
| 5.3 | Navbar color conflict resolved correctly | Kept `#2c3e50` from `feature/update-header-test` | Kept `#333` or a different color |
| 5.4 | Merge committed with a proper message | Merge commit created with a conventional / clear merge message | Merge committed but with default or non-conventional message |
| 5.5 | PR opened and merged into `main` | PR opened and merged cleanly (no conflicts remaining on GitHub) | PR opened but GitHub still reports conflicts, or merged with the wrong strategy |

### Task 6 — Fix the Subtract Bug (4 marks)

| # | Scored subtask | 1 mark | 0.5 marks |
|---|----------------|--------|-----------|
| 6.1 | Bugfix branch created from `main` | Descriptive branch name with a proper prefix off latest `main` | Branch is descriptive but missing a proper prefix |
| 6.2 | Bug correctly fixed in `app.js` | `subtract: (a, b) => a - b` (operation now returns the correct result) | Bug located but fix is wrong (e.g. swaps operands, or fixes by changing the wrong function) |
| 6.3 | Conventional commit for the fix | Commit message uses conventional format | Bug fixed and committed but message not conventional |
| 6.4 | PR opened and merged into `main` | PR opened from the bugfix branch and merged into `main` | PR opened but merged with a clearly wrong strategy, or branch pushed but no PR opened |

### Task 7 — Documentation (4 marks)

| # | Scored subtask | 1 mark | 0.5 marks |
|---|----------------|--------|-----------|
| 7.1 | Docs branch created from `main` | Descriptive branch name with proper prefix off latest `main` | Branch descriptive but missing prefix |
| 7.2 | `README.md` created with required content | File contains project name `Rainbow IT - Calculator` AND a one-line description | File created but missing the project name or the description |
| 7.3 | Conventional commit for docs | Commit uses conventional format | File committed but message not conventional |
| 7.4 | PR opened and merged into `main` | PR opened from the docs branch and merged into `main` | PR opened but not merged, or merged directly without a PR |

### Global deductions (apply across all tasks)

- **`COMMANDS.md` committed at any point** — deduct 1 mark from the total.
- **Any direct push to `main`** — deduct 2 marks from the total.
- **`git add .` used (verifiable via `COMMANDS.md`)** — deduct 1 mark from the total.

### Total

| Task | Marks |
|------|-------|
| Task 2 | 3 |
| Task 3 | 5 |
| Task 4 | 3 |
| Task 5 | 5 |
| Task 6 | 4 |
| Task 7 | 4 |
| **Total** | **24** |

**Good luck!**
