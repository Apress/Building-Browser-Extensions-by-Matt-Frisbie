# Building Browser Extensions Errata

Note: These page numbers match the print edition. eBook editions may differ.

## Chapter 5

## Page 123

The example is missing quotes around the URL. It should read:

<pre>
{
  ...
  "chrome_settings_overrides": {
    "startup_pages": [
      <b>"https://www.buildingbrowserextensions.com"</b>
    ]
  }
}
</pre>

## Page 129

The paragraph should read:

For all command identifiers that do not match the reserved commands, the key shortcut will dispatch a command event to all listeners of <b>`commands.onCommand()`</b>.
