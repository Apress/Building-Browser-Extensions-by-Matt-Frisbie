# Building Browser Extensions Errata

Note: These page numbers match the print edition. eBook editions may differ.

### Page 123

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

### Page 129

The paragraph should read:

For all command identifiers that do not match the reserved commands, the key shortcut will dispatch a command event to all listeners of <b>`commands.onCommand()`</b>.

### Page 139

`ruleset_2` should point to `ruleset_1.json`

```
declarative_net_request": {
  "rule_resources": [
    {
      "id": "ruleset_1",
      "enabled": true,
      "path": "ruleset_1.json"
    },
    {
      "id": "ruleset_2",
      "enabled": false,
      "path": "ruleset_1.json"
    }
  ]
}
```

### Page 179

`popup.js with forbitten eval()`

should be

`popup.js with forbidden eval()`
