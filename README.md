
# walkme-snippet-injector
Cloudflare app to injects WalkMe's snippet to a site integrated with [Cloudflare](https://cloudflare.com)

## Build
1. Install modules
```bash
$ npm install
```

2. Build with yarn
```bash
$ yarn build
```

## Installation
<a href="https://cloudflare.com/apps/jilDYXfMlqR5/install?source=button">
  <img
    src="https://install.cloudflareapps.com/install-button.png"
    alt="Install walkme-snippet-injector with Cloudflare"
    border="0"
    width="150">
</a>

## Usage
1. Install the app
2. Grab you WalkMe User ID  (Also known as User GUID) from within your Editor. GOTO Manu -> Snippet: 
![Snippet](media/snippet.png?raw=true "Snippet")
3. Insert your WalkMe User ID
4. Click on `Preview in seperate window`
5. Right-click and select inspect the page
6. Open the console
7. Enter the following text query: `_walkMe.getEnvId();`
8. If it returns undefined, the Snippet is not properly set up.  If the query returns a value, then you’re all set!

Troubleshooting and other methods to inject WalkMe's snippet: [https://support.walkme.com/knowledge-base/snippet/](https://support.walkme.com/knowledge-base/snippet/)

## Test
1. Build sources
2. Upload the folder to [app-creator](https://www.cloudflare.com/apps/developer/app-creator)
3. Insert your WalkMe User ID, or use the following test user id: `e10edb82f7094e61a758e821f91dc4b3`
4. Continue from section 4 in `Usage` section.


## Contributing
1. Fork it (<https://github.com/pab1it0/walkme-snippet-injector.git/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors
-  [Pavel Shklovsky](https://github.com/pab1it0) - creator and maintainer
