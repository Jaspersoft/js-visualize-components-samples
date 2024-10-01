---
layout: default
title: Events
nav_order: 3
parent: Scheduler
has_children: false
---

# Events

In order to work with user input, you may provide a callback function which is called when certain events occur.

When configuring the scheduler component, you may provide an object in the events property of your configuration object.

In read-only scenarios where you do not wish to process user input, you may omit this configuration.
``` js
events?: {
    cancelBtnClick?: () => void,
    scheduleBtnClick?: () => void,
    success?: (isScheduleCreatedSuccessfully: boolean, jobInformation: any) => void,
    error: ( error: {[key:string]: string} ) => void,
};
```

## Cancel Button Click
The user must implement a `cancelBtnClick` function to handle actions when the cancel button is clicked in the scheduler control panel. This function is optional.

## Schedule Button Click
The user needs to implement a `scheduleBtnClick` function to handle actions when the schedule button is clicked in the scheduler control panel. This function will receive two parameters: `isScheduleCreatedSuccessfully` and `jobInformation`.
- If the job is created successfully:
  - `isScheduleCreatedSuccessfully` will be `true`.
  - `jobInformation` will contain the details of the created job.

- If the job creation fails:
  - `isScheduleCreatedSuccessfully` will be `false`.
  - `jobInformation` will include the error information.


## Successs
When Scheduler ui plugin is successfully rendered, the success function will be called. This function is optional.

## Error 
When Scheduler ui plugin throws error while rendering, the success function will be called. This function is optional.

## Handling validations

To handle validations on the developer side, you have to use the
[events.error]({{site.baseurl}}/pages/scheduler/events.html#handling-errors) method when calling
the `renderControlPanel`. This method will return an error parameter that contains all the validations.
E.g.:

```javascript
    plugin.renderControlPanel(
      document.getElementById("my-container"),
      visualizeObj,
      {
        events: {
            success: (isScheduleCreatedSuccessfully: boolean, jobInformation: any) => {
                console.log("Success", jobInformation);
            },
            error: (error: any) => {
                console.log("Error", error);
            },
            cancelBtnClick: () => {
                console.log("Cancel button is clicked");
            },
            scheduleBtnClick: () => {
                console.log("Create schedule button is clicked");
            },
        }
      }
    )
```


## Handling errors
To handle errors, you can use the `error` property when calling the renderControlPanel method. This method will 
return an error object when trying to render the scheduler UI, in case of an error.
E.g.: 
```javascript
    plugin.renderControlPanel(
      '/My/URI',
      document.getElementById("my-container"),
      {
        error: (error) => {
            console.log("error => ", error);
        }
      }
    )
```

### When the container provided is not found

A possible situation is when the container provided is not available in the DOM. In this case, the error object will contain:
```json
{
  "container.not.found": "Root element is not found"
}
```


### When the resourceURI is not present in the config object.
Another possible situation is, when resourceURI is not present in the scheduler configuration object. In this case, the error object
will contain:
```json
{
  "resource.uri.missing.configuration": "resourceURI is required in the configuration"
}
```

### When the server is not present in the config object.
Another possible situation is when server is not present in the scheduler configuration object. In this case, the error object
will contain:
```json
{
  "server.missing.configuration": "server is required in the configuration"
}
```

### When the contextPath is not present in the config object.
Another possible situation is when contextPath is not present in the scheduler configuration object. In this case, the error object
will contain:
```json
{
  "contextPath.missing.configuration": "contextPath is required in the configuration"
}
```

### When the resourceURI is not found in the JRS server.
Another possible situation is when the resourceURI is not found in the JRS server or is incorrect. In this case, the error object
will contain:
```json
{
  "resource.uri.not.found": "Resource URI was not found"
}
```

### When the user doesn't have permission to schedule specific resource.
Another possible situation is when user doesn't have permission to schedule a resource. In this case, the error object
will contain:
```json
{
  "resource.access.denied": "You don't have permission to schedule this resource"
}
```

### When the schedule tab is hidden and user hasn't specified value for label field in the configuration.
Another possible situation is when schedule tab is hidden and user doesn't mention value for the mandatory label field in the configuration. In this case, the error object
will contain:
```json
{
  "label.missing.value.schedule.tab.hidden.configuration": "Value for label is required in the configuration when schedule tab is hidden"
}
```


### When the output tab is hidden and user hasn't specified value for baseOutputFilename field in the configuration.
Another possible situation is when output tab is hidden and user doesn't mention value for the mandatory baseOutputFilename field in the configuration. In this case, the error object
will contain:
```json
{
  "baseOutputFilename.hidden.missing.value.output.tab.hidden.configuration": "Value for baseOutputFilename is required in the configuration when output tab is hidden"
}
```

### When the notification tab is hidden and user hasn't specified value for address or subject fields in the configuration.
Another possible scenario occurs when the notification tab is hidden, and the user fails to provide a value for the mandatory address or subject field in the configuration. In this case, the error object
will contain:
```json
{
  "address.hidden.missing.value.notification.tab.hidden.configuration": "Value for address is required in the configuration when notifications tab is hidden"
}
```
```json
{
  "subject.hidden.missing.value.notification.tab.hidden.configuration": "Value for subject is required in the configuration when notifications tab is hidden"
}
```

### When the label, address, subject or baseOutputFilename fields are hidden and user hasn't specified values for it in the configuration.
Another possible scenario is when the user sets showField to false for any of the mandatory fields—label, address, subject, or baseOutputFilename—and does not provide values for them. In this case, the error object will include the corresponding error based on the missing field.
```json
{
  "label.hidden.missing.value.configuration": "Value for label is required in the configuration when label is hidden"
}
```
```json
{
  "address.hidden.missing.value.configuration": "Value for address is required in the configuration when address is hidden"
}
```
```json
{
  "subject.hidden.missing.value.configuration": "Value for subject is required in the configuration when subject is hidden"
}
```
```json
{
  "baseOutputFilename.hidden.missing.value.configuration": "Value for baseOutputFilename is required in the configuration when baseOutputFilename is hidden"
}
````

### When the value for label is empty or length is more than 100 characters.
Another possible scenario arises when the user provides a value for the label field in the configuration, but it is either empty or exceeds 100 characters. In this case, the error object will include:
```json
{
  "label.invalid": "Scheduled job name should not be empty."
}
```
```json
{
  "label.invalid": "The scheduled job name is too long. The maximum length is 100 characters."
}
```

### When the length of value for description  is more than 100 characters.
Another possible situation occurs when the user specifies a value for the label field in the configuration, but the value is either empty or longer than 100 characters. In this case, the error object will contain:
```json
{
  "label.invalid": "Scheduled job name should not be empty."
}
```
```json
{
  "label.invalid": "The scheduled job name is too long. The maximum length is 100 characters."
}
```

### When the value for recurrenceInterval is empty or not an integer.
Another possible scenario arises when the user specifies a value for the recurrenceInterval field in the configuration, but the value is either empty or not an integer. In this case, the error object will contain:```json
{
  "error.recurrence": "Recurrence interval should not be empty."
}
```
```json
{
  "error.recurrence.must.be.integer": "The recurrence interval must be an integer greater than 0."
}
```

### When the value for startType is 2 and startDate is empty/invalid or past date.
Another possible scenario occurs when the user specifies a value of 2 for startType, but the startDate is either empty, invalid, or a past date in the configuration. In this case, the error object will contain:
```json
{
  "error.start.date": "Start date and time should not be empty or invalid"
}
```
```json
{
  "error.past.date": "Start date and time is in the past. The start date and time must be in the future."
}
```
### When the value for address is empty or invalid.
Another possible scenario arises when the user specifies a value for the address field in the configuration, but the value is either empty or not an integer. In this case, the error object will contain:```json
{
  "error.notifications.email.empty": "Email address should not be empty.Please one or more email addresses."
}
```
```json
{
  "error.email.address": "One or more email addresses are invalid."
}
```

### When the value for subject is empty or length is more than 100 characters.
Another possible scenario occurs when the user specifies a value for the subject field in the configuration, but the value is either empty or exceeds 100 characters. In this case, the error object will contain:
```json
{
  "error.enter.subject": "Subject should not be empty."
}
```
```json
{
  "error.subject.too.long": "The subject is too long."
}
```

### When the length of value for messageText  is more than 2000 characters.
Another possible scenario arises when the user specifies a value for the messageText field in the configuration, but the length exceeds 2000 characters. In this case, the error object will contain:
```json
{
  "error.message.too.long": "The message is too long."
}
```

### When the value for baseOutputFilename is empty or length is more than 200 characters.
Another possible scenario occurs when the user specifies a value for the baseOutputFilename field in the configuration, but the value is either empty, exceeds 200 characters, or is otherwise invalid. In this case, the error object will contain:
```json
{
  "error.file.name": "File name should not be empty."
}
```
```json
{
  "error.file.name.too.long": "The file name is too long. It must be 200 characters or less."
}
```
```json
{
  "error.invalid.file.name": "The base output name contains invalid characters. You might have mistyped it."
}
```

### When the value for outputFormat is empty.
Another possible scenario arises when the user specifies a value for the label field in the configuration, but the value is empty. In this case, the error object will contain:
```json
{
  "error.output.format": "Formats should not be empty"
}
```

### When the value for folderURI is empty.
Another possible scenario occurs when the user specifies a value for the folderURI field in the configuration, but the value is either empty or has an invalid format. In this case, the error object will contain:
```json
{
  "error.output.format": "Formats should not be empty"
}
```
```json
{
  "error.report.schedule.output.folder.notwriteable": "The scheduled job output folder has restricted access."
}
```