# Jest resolve issue

This is a reproduction of [this](https://github.com/facebook/jest/issues/5325) issue.

Repo includes two packages that was created via [CRA](https://create-react-app.dev/).
Both packages has same hoisted dependency `antd`. 
`app-a` was ejected and `transformIgnorePatterns` was modified.
`app-b` was not ejected and have also the same bug.


## Steps to reproduce
1. Clone repo
2. Install dependencies `yarn`
3. Run test from 'app-a' `yarn workspace app-a run test --watchAll=false`
4. Run test from 'app-b' `yarn workspace app-b run test --watchAll=false`
