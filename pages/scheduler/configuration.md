---
layout: default
title: Configuration
nav_order: 2
grand_parent: Components
parent: Scheduler
has_children: false
---

# Configuration


<table class="configuration">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>server</td>
      <td>string</td>
      <td></td>
      <td>URI of server where JasperReports Server is hosted. (For example, http://localhost:8080)</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>contextPath</td>
      <td>string</td>
      <td></td>
      <td>Context path of JasperReports Server where it is host e.g. /jasperserver-pro</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>resourceURI</td>
      <td>string</td>
      <td></td>
      <td>URI of JasperReports Server resource that will be scheduled</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>stepper</td>
      <td>object</td>
      <td></td>
      <td>
        <p class="compact-long">Properties for the stepper.</p>
        <p class="compact-long">For more details, see <a href="{{site.baseurl}}/pages/scheduler/configuration.html#stepper-configuration">Stepper configuration</a> section below.</p>
      </td>
      <td>No</td>
    </tr>
    <tr>
      <td>tabs</td>
      <td>object</td>
      <td></td>
      <td>
        <p class="compact-long">Properties for tabs.</p>
        <p class="compact-long">For more details, see <a href="{{site.baseurl}}/pages/scheduler/configuration.html#tabs-configuration">Tabs configuration</a> section below.</p>
      </td>
      <td>No</td>
    </tr>
    <tr>
      <td>events</td>
      <td>object</td>
      <td>{}</td>
      <td>
        <p class="compact-long">Callback function that is called when certain events occur.</p>
        <p class="compact-long">For more details, see the <a href="{{site.baseurl}}/pages/scheduler/events.html">Events</a> page.</p>
      </td>
      <td>No</td>
    </tr>
  </tbody>
</table>

<div class="spacer-12"></div>

## Stepper

### Default
```js
stepper: {
    show: true
  }
```

### Properties

<table class="configuration">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
      <th>Required</th>
      <th>Supported values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show</td>
      <td>boolean</td>
      <td>true</td>
      <td>If <code class="inline"><strong class="dark">true</strong></code>, the stepper will be shown</td>
      <td>Yes</td>
      <td>
        <p class="compact-short">true</p>
        <p class="compact-short">false</p>
      </td>
    </tr>
  </tbody>
</table>

<div class="spacer-12"></div>

##  Tabs

### Default
```json
{
    "tabsOrder": ["schedule", "parameters", "notifications", "output"],
    "tabsData": {
      "schedule": {
          "label": { "show": true, "value": "" },
          "description": {
            "value": "",
            "show": true
          },
          "recurrenceInterval": { "show": true, "value": 1 },
          "recurrenceIntervalUnit": {
            "show": true,
            "value": "DAY"
          },
          "startTime": {
            "show": true,
            "value": "now"
          }
      },
      "output": {
          "baseOutputFilename": {
            "show": true,
            "value": ""
          },
          "outputDescription": {
            "show": true,
            "value": ""
          },
          "outputFormat": { "show": true, "value": ["pdf"] },
          "outputTimeZone": {
            "show": true,
            "value": ""
          }
      },
      "parameters": {
      },
      "notifications": {
          "address": { "show": true, "value": [] },
          "subject": { "show": true, "value": "" },
          "messageText": {
            "value": ""
          },
          "reportAccessType": {
            "show": true,
            "value": "SEND_ATTACHMENT"
          }
      }
    }
  }
```

### Properties

<table class="configuration">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
      <th>Required</th>
      <th>Supported values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>tabsOrder</td>
      <td>Array</td>
      <td>["schedule", "parameters", "notifications", "output"]</td>
      <td>Order of appearance for the tabs. To hide a tab, leave it out of the array.</td>
      <td>No</td>
      <td>
        <p class="compact-short">'schedule'</p>
        <p class="compact-short">'parameters'</p>
        <p class="compact-short">'notifications'</p>
        <p class="compact-short">'output'</p>
      </td>
    </tr>
    <tr>
      <td>schedule</td>
      <td>object</td>
      <td></td>
      <td>
        <p class="compact-long">Properties for the schedule tab.</p>
        <p class="compact-long">For more information, see <a href="{{site.baseurl}}/pages/scheduler/configuration.html#schedule-tab-configuration">Schedule tab configuration</a> section below.</p>
      </td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <td>parameters</td>
      <td>object</td>
      <td></td>
      <td>Properties for the parameters tab.</td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <td>notifications</td>
      <td>object</td>
      <td></td>
      <td>
        <p class="compact-long">Properties for the notifications tab.</p>
        <p class="compact-long">For more information, see <a href="{{site.baseurl}}/pages/scheduler/configuration.html#notifications-tab-configuration">Notifications tab configuration</a> section below.</p>
      </td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <td>output</td>
      <td>object</td>
      <td></td>
      <td>
        <p class="compact-long">Properties for the output tab.</p>
        <p class="compact-long">For more information, see <a href="{{site.baseurl}}/pages/scheduler/configuration.html#output-tab-configuration">Output tab configuration</a> section below.</p>
      </td>
      <td>No</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="spacer-12"></div>

### Schedule Tab

<table class="configuration">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
      <th>Required</th>
      <th>Supported values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>label</td>
      <td>object</td>
      <td><code>
            {
            <p>show: true,</p>
            <p>value: ""</p>
            }
          </code>
      </td>
      <td>Visibility and default value of label field</td>
      <td>If show is false, a value is required.</td>
      <td>The maximum length of value is 100 characters.</td>
    </tr>
    <tr>
      <td>description</td>
      <td>object</td>
      <td><code>
            {
            <p>show: true,</p>
            <p>value: ""</p>
            }
          </code>
      </td>
      <td>Visibility and default value of description field</td>
      <td>No</td>
      <td>The maximum length is 250 characters.</td>
    </tr>
    <tr>
      <td>recurrenceInterval</td>
      <td>object</td>
      <td><code>
            {
            <p>show: true,</p>
            <p>value: 1</p>
            }
          </code>
      </td>
      <td>Visibility and default value of recurrenceInterval field</td>
      <td>No</td>
      <td>The recurrence interval must be an integer greater than 0.</td>
    </tr>
    <tr>
      <td>recurrenceIntervalUnit</td>
      <td>object</td>
      <td><code>
            {
            <p>show: true,</p>
            <p>value: "DAY"</p>
            }
          </code>
      </td>
      <td>Visibility and default value of recurrenceIntervalUnit field</td>
      <td>No</td>
      <td>
        <p class="compact-short">'HOUR'</p>
        <p class="compact-short">'DAY'</p>
        <p class="compact-short">'WEEK'</p>
      </td>
    </tr>
    <tr>
      <td>startTime</td>
      <td>object</td>
      <td><code>
            {
            <p>show: true,</p>
            <p>value: "now"</p>
            }
          </code>
      </td>
      <td>Visibility and default value of startTime field</td>
      <td>No</td>
      <td>The value must be either 'now' or a valid start date and time. If the value is 'now', the 'Now' option will be selected. If the value is a start date and time, it cannot be empty and must be set in the future; in this case, the 'Specific date and time' option will be selected.</td>
    </tr>
  </tbody>
</table>

<div class="spacer-12"></div>

### Notifications Tab

<table class="configuration">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
      <th>Required</th>
      <th>Supported values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>address</td>
      <td>object</td>
      <td><code>
            {
            <p>show: true,</p>
            <p>value: ""</p>
            }
          </code>
      </td>
      <td>Visibility and default value of address field</td>
      <td>If show is false, a value is required.</td>
      <td>One or more email addresses should be valid.</td>
    </tr>
    <tr>
      <td>subject</td>
      <td>object</td>
      <td><code>
            {
            <p>show: true,</p>
            <p>value: ""</p>
            }
          </code>
      </td>
      <td>Visibility and default value of subject field</td>
      <td>If show is false, a value is required.</td>
      <td>The maximum length is 100 characters.</td>
    </tr>
    <tr>
      <td>messageText</td>
      <td>object</td>
      <td><code>
            {
            <p>show: true,</p>
            <p>value: ""</p>
            }
          </code>
      </td>
      <td>Visibility and default value of messageText field</td>
      <td>No</td>
      <td>The maximum length is 2000 characters.</td>
    </tr>
    <tr>
      <td>resultSendType</td>
      <td>object</td>
      <td><code>
            {
            <p>show: true,</p>
            <p>value: "SEND_ATTACHMENT"</p>
            }
          </code>
      </td>
      <td>Visibility and default value of resultSendType field</td>
      <td>No</td>
      <td>The value must be either 'SEND_ATTACHMENT' or a valid JasperReports Server folder path. If the value is 'SEND_ATTACHMENT', the option to 'Include report/dashboard file as attachment' will be selected. If the value is a folder path, it must not include any invalid characters, and the option 'Include report/dashboard as repository link' will be selected.</td>
    </tr>
  </tbody>
</table>

<div class="spacer-12"></div>

### Output Tab

<table class="configuration">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
      <th>Required</th>
      <th>Supported values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>baseOutputFilename</td>
      <td>object</td>
      <td><code>
            {
            <p>show: true,</p>
            <p>value: ""</p>
            }
          </code>
      </td>
      <td>Visibility and default value of output file field</td>
      <td>No</td>
      <td>
        <p class="compact-long">The maximum length is 200 characters.</p>
        <p class="compact-long">The output filename should not contains invalid characters.</p>
      </td>
    </tr>
    <tr>
      <td>outputDescription</td>
      <td>object</td>
      <td><code>
            {
            <p>show: true,</p>
            <p>value: ""</p>
            }
          </code>
      </td>
      <td>Visibility and default value of output description field</td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <td>outputFormat</td>
      <td>object</td>
      <td><code>
            {
            <p>show: true,</p>
            <p>value: ["pdf"]</p>
            }
          </code>
      </td>
      <td>Visibility and default value of output formats field</td>
      <td>No</td>
      <td>It should be supported output format by JasperReports Server.</td>
    </tr>
    <tr>
      <td>outputTimeZone</td>
      <td>object</td>
      <td><code>
            {
            <p>show: true,</p>
            <p>value: ""</p>
            }
          </code>
      </td>
      <td>Visibility and default value of output timezone field</td>
      <td>No</td>
      <td>It should be supported timezone by JasperReports Server</td>
    </tr>
  </tbody>
</table>