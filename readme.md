# Posts template

Use this template to write your posts in markdown.

## How to use

[Create your repository from this template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
and clone your new repo.

Run `npm i` to get the deps installed.

To compile everything and watch for changes:

```bash
npm run watch
```

To compile without watch run:

```bash
npm run build
```

You can pass a `--file` argument to both commands, watch and run, for example:

```bash
npm run build -- --file posts/example.md
```

If you have the global `gulp` tool installed, you can run it more easily. Replace `npm run` with `gulp`, and the `--` is unnecessary, for example:

```bash
gulp watch --file posts/example.md
```

## VS Code support

There are VS Code tasks on the `.vscode` directory. The build task will compile and watch the current file.

## Update your syntax highlight preferences

When writing code snippets like this:

~~~
```csharp
WriteLine("Hello world");
```
~~~

The output will be like this:

```html
<pre class="brush: csharp">WriteLine("Hello world");</pre>
```

You can change this by changing the `highlight` function on `gulpfile.mjs`.


## Contributing

Questions, comments, bug reports, and pull requests are all welcome.  Submit them at
[the project on GitHub](https://github.com/giggio/posts-template/).

Bug reports that include steps-to-reproduce (including code) are the
best. Even better, make them in the form of pull requests.

## Author

[Giovanni Bassi](https://github.com/giggio)

## License

Licensed under the MIT license.
