---
layout: default
title: Configuration
nav_order: 2
parent: Scheduler
has_children: false
---

# Configuration


<table>
  <thead>
    <tr>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Name</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Type</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Default</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Description</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">server</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">string</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;"></td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">URI of server where JRS is hosted. e.g.http://localhost:8080/jasperserver-pro</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">Yes</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">contextPath</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">string</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;"></td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">Context path of JRS where it is host e.g. /jasperserver-pro</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">Yes</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">resourceURI</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">string</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;"></td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">URI of JRS resource to which you want implement schedule.</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">Yes</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">stepper</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;"><a href="{{site.baseurl}}/pages/scheduler/configuration.html#default">reference</a></td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">If specifies stepper properties. <a href="{{site.baseurl}}/pages/scheduler/configuration.html#stepper-configuration">reference</a></td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">tabs</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;"><a href="{{site.baseurl}}/pages/scheduler/configuration.html#default-1">reference</a></td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It specifies tab properties. <a href="{{site.baseurl}}/pages/scheduler/configuration.html#tabs-configuration">reference</a></td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">events</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">{}</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">Callback function which is called when certain events occur. <a href="{{site.baseurl}}/pages/scheduler/events.html">reference</a></td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
    </tr>
  </tbody>
</table>


## Stepper configuration

### Default 
```js
stepper: {
    show: true
  }
```

### Props

<table>
  <thead>
    <tr>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Name</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Type</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Default</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Description</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Required</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Supported Values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">show</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">boolean</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">true</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">If `true` then stepper will be shown.</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">Yes</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">`true`  `false`</td>
    </tr>
  </tbody>
</table>


##  Tabs configuration

### Default
```json
{
    "tabsOrder": ["schedule", "parameters", "notifications", "output"],
    "tabsData": {
      "schedule": {
          "label": { "showField": true, "value": "" },
          "description": {
            "value": "",
            "showField": true
          },
          "recurrenceInterval": { "showField": true, "value": 1 },
          "recurrenceIntervalUnit": {
            "showField": true,
            "value": "DAY"
          },
          "startTime": {
            "showField": true,
            "value": "now"
          }
      },
      "output": {
          "baseOutputFilename": {
            "showField": true,
            "value": ""
          },
          "outputDescription": {
            "showField": true,
            "value": ""
          },
          "outputFormat": { "showField": true, "value": ["pdf"] },
          "outputTimeZone": {
            "showField": true,
            "value": ""
          }
      },
      "parameters": {
      },
      "notifications": {
          "address": { "showField": true, "value": [] },
          "subject": { "showField": true, "value": "" },
          "messageText": {
            "value": ""
          },
          "reportAccessType": {
            "showField": true,
            "value": "SEND_ATTACHMENT"
          }
      }
    }
  }
```

### Props

<table>
  <thead>
    <tr>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Name</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Type</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Default</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Description</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Required</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Supported Values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">tabsOrder</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">Array</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">["schedule", "parameters", "notifications", "output"]</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">If specified, it shows the tabs in the order mentioned by the user. If user doesn't mention any tab, that tab will be hidden.</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">`schedule`  `parameters` `notifications` `output`</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">schedule</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;"></td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It specifies schedule tab properties.<a href="{{site.baseurl}}/pages/scheduler/configuration.html#schedule-tab-configuration">reference</a></td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;"></td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">parameters</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;"></td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It specifies parameters tab properties.<a href="{{site.baseurl}}/pages/input-controls/basic-usage.html#rendering-the-input-controls">reference</a></td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;"></td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">notifications</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;"></td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It specifies notifications tab properties. <a href="{{site.baseurl}}/pages/scheduler/configuration.html#notifications-tab-configuration">reference</a></td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;"></td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">output</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;"></td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It specifies output tab properties. <a href="{{site.baseurl}}/pages/scheduler/configuration.html#output-tab-configuration">reference</a></td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;"></td>
    </tr>
  </tbody>
</table>

### Schedule tab configuration

<table>
  <thead>
    <tr>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Name</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Type</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Default</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Description</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Required</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Supported Values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">label</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">{ showField: true, value: "" }</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It manages visibility and default value of label field</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">If showField is false, then value is required.</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">- The maximum length of value is 100 characters.</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">description</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">{ showField: true, value: "" }</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It manages visibility and default value of description field</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">- The maximum length is 250 characters.</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">recurrenceInterval</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">{ showField: true, value: "1" }</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It manages visibility and default value of timezone field</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">- The recurrence interval must be an integer greater than 0.</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">recurrenceIntervalUnit</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">{ showField: true, value: "DAY" }</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It manages visibility and default value of startDate field</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">- The supported values are `HOUR` `DAY` `WEEK`</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">startTime</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">{ showField: true, value: "now" }</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It manages visibility and default value of startTime field</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">The value must be either `now` or a valid start date and time. If the value is `now`, the `Now` option will be selected. If the value is a start date and time, it cannot be empty and must be set in the future; in this case, the `Specific date and time` option will be selected.</td>
    </tr>
  </tbody>
</table>


### Notifications tab configuration

<table>
  <thead>
    <tr>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Name</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Type</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Default</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Description</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Required</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Supported Values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">address</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">{ showField: true, value: "" }</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It manages visibility and default value of address field</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">If showField is false, then value is required.</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">- One or more email addresses should be valid.</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">subject</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">{ showField: true, value: "" }</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It manages visibility and default value of subject field</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">If showField is false, then value is required.</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">- The maximum length is 100 characters.</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">messageText</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">{ showField: true, value: "" }</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It manages visibility and default value of message field</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">- The maximum length is 2000 characters.</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">reportAccessType</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">{ showField: true, value: "SEND_ATTACHMENT" }</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It manages visibility and default value of report access field</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">The value must be either `SEND_ATTACHMENT` or a valid JRS folder path. If the value is `SEND_ATTACHMENT`, the option to `Include report/dashboard file as attachment` will be selected. If the value is a folder path, it must not include any invalid characters, and the option `Include report/dashboard as repository link` will be selected.</td>
    </tr>
  </tbody>
</table>


### Output tab configuration

<table>
  <thead>
    <tr>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Name</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Type</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Default</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Description</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Required</th>
      <th style="padding: 12px; border: 1px solid #e0e0e0; background-color: #f5f5f5; text-align: left;">Supported Values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">baseOutputFilename</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">{ showField: true, value: "" }</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It manages visibility and default value of output file field</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">- The maximum length is 200 characters.<br/> -  The output filename should not contains invalid characters.</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">outputDescription</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">{ showField: true, value: "" }</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It manages visibility and default value of output description field</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;"></td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">outputFormat</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">{ showField: true, value: ["pdf"] }</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It manages visibility and default value of output formats field</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">- It should be supported output format by JRS.</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">outputTimeZone</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">object</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">{ showField: true, value: "" }</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">It manages visibility and default value of output timezone field</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">No</td>
      <td style="padding: 12px; border: 1px solid #e0e0e0;">- It should be supported timezone by JRS</td>
    </tr>
  </tbody>
</table>



