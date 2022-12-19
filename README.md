# Basics

This repo gives you basic setup that you can use (in whole or in part) to get started with a new backend project for COOP. It is a work in progress and PRs are encouraged.

Included are:

- Basic Github Actions to run tests and linting on your PRs.
- ESlint with airbnb config and handful of rules to enforce undefined variables and such.
- Prettier (enforced via ESlint).

# Dependencies

Here is what the included package.json dependencies do:

## devDependencies

- **typescript** - Basic typescript support
- **@typescript-eslint/eslint-plugin** - TS support in ESLint
- **@typescript-eslint/parser** - TS support in ESLint
- **eslint** - Linter
- **eslint-config-airbnb-base** - Non-react airbnb config
- **eslint-config-airbnb-typescript** - TS airbnb config
- **eslint-config-prettier** - Config that disables rules that conflict with prettier
- **eslint-plugin-import** - Linting for imports (required by airbnb)
- **eslint-plugin-prettier** - Plugin that runs prettier as an ESLint rule
- **prettier** - Code formatter

# Github Actions

Defined in `.github/workflows/` are github actions specifically for checking PRs for validity. Deployment is not handled by Github Actions, but rather by CircleCI, which is out of scope of this repo. The included PR jobs are:

* Run ESLint (and indirectly prettier) checks on PRs.
* Build the repo on PRs.

If any of the rules fail, the PR will be marked as failed. If you prefer to run checks locally before you each commit you can add pre-commit hooks, which are not included in this repo. 

## Developing Github Actions locally
There is a tool called [act](https://github.com/nektos/act) which makes running Github Actions locally easy.

To install:
- On MacOS: `brew install act`.
- On Linux: user package manager.
- Or `curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash`.

To run all jobs:
```
act
```

To run a specific job:
```
act -j <job-name>

# Example:
act -j lint
```

