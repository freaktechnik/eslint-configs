# eslint-configs

Basic configurations freaktechnik really likes. They are pretty opinionated and other people will probably find them disgusting. Don't forget to add `--ext json,js` to your eslint invocation.

Configurations are published under the @freaktechnik namespace.

## Configurations

- basic
- node
- test
- browser
- extension
- webpack
- babel
- react

## Bumping the version

To bump the version, use the following kind of command:

```sh
npm version --workspaces <target version>
git commit -am "<version>"
git tag -s -m "v<version>" v<version>
```
The CI will then publish all the individual packages.
