---
layout: default
title: Events
nav_order: 3
parent: Scheduler
has_children: false
---

# Events

To work with user input, you may provide a callback function which is called when certain events occur.

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

## Cancel button click
The developer needs implement a `cancelBtnClick` function to handle actions when the Cancel button is clicked in the scheduler control panel. This function is optional.

## Schedule button click
The developer needs to implement a `scheduleBtnClick` function to handle actions when the Schedule button is clicked in the scheduler control panel. This function will receive two parameters: `isScheduleCreatedSuccessfully` and `jobInformation`.
- If the job is created successfully:
    - `isScheduleCreatedSuccessfully` will be `true`.
    - `jobInformation` will contain the details of the created job.

- If the job creation fails:
    - `isScheduleCreatedSuccessfully` will be `false`.
    - `jobInformation` will include the error information.


## Success
When Scheduler is successfully rendered, the success function will be called. This function is optional.

## Error
When Scheduler throws error while rendering, the error function will be called. This function is optional.

## Example of calling renderScheduler

```javascript
    renderScheduler(
        visualizeClient,
        "/path/to/resource",
        document.getElementById("my-container"),
        {
          events: {
              success: () => {
                  console.log("Success");
              },
              error: (error: {[key:string]: string}) => {
                  console.log("Error", error);
              },
              cancelBtnClick: () => {
                  console.log("Cancel button is clicked");
              },
              scheduleBtnClick: (isScheduleCreatedSuccessfully: boolean, jobInformation: any) => {
                  console.log("Schedule button clicked", isScheduleSuccessful, jobInfo);
              },
          }
        }
    )
```


## Handling errors
To handle errors, you can use the `error` property when calling the renderScheduler method. This method will
return an error object when trying to render the scheduler UI in case of an error.
For example:
```typescript
    renderScheduler(
        visualizeClient,
        "/path/to/resource",
        document.getElementById("my-container"),
        {
          events: {
            error: (error: { [key: string]: string }) => {
              console.log("error => ", error);
            }
          },
        }
    )
```

Below are possible scenarios that will return an error object, along with the contents of the associated error object.

- ### Container provided is not found
```json
{
  "container.not.found": "Root element is not found"
}
```

- ### resourceURI is not present in the config object.
```json
{
  "resource.uri.missing.configuration": "resourceURI is required in the configuration"
}
```

- ### Server is not present in the config object.
```json
{
  "server.missing.configuration": "server is required in the configuration"
}
```

- ### contextPath is not present in the config object.
```json
{
  "contextPath.missing.configuration": "contextPath is required in the configuration"
}
```

- ### resourceURI is not found in JasperReports Server or is incorrect.
```json
{
  "resource.uri.not.found": "Resource URI was not found"
}
```

- ### User doesn't have permission to schedule specific resource.
```json
{
  "resource.access.denied": "You don't have permission to schedule this resource"
}
```

- ### Schedule tab is hidden and no value is specified for label field in the configuration.
```json
{
  "label.missing.value.schedule.tab.hidden.configuration": "Value for label is required in the configuration when schedule tab is hidden"
}
```

- ### Output tab is hidden and no value is specified for baseOutputFilename field in the configuration.
```json
{
  "baseOutputFilename.hidden.missing.value.output.tab.hidden.configuration": "Value for baseOutputFilename is required in the configuration when output tab is hidden"
}
```

- ### Notification tab is hidden and no value is specified for address or subject fields in the configuration.
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

```json
{
  "address.not.in.proper.format": "Value for address should be an array of strings"
}
```

- ### label, address, subject, and/or baseOutputFilename fields are hidden and no values are specified in the configuration.
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

- ### label value is empty or length is more than 100 characters.
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

- ### description value is more than 100 characters.
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

- ### recurrenceInterval value is empty or is not an integer.
```json
{
  "error.recurrence": "Recurrence interval should not be empty."
}
```
```json
{
  "error.recurrence.must.be.integer": "The recurrence interval must be an integer greater than 0."
}
```

- ### startType value is 2 and startDate is empty, invalid, or past date.
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
- ### address value is empty or invalid.
```json
{
  "error.notifications.email.empty": "Email address should not be empty.Please one or more email addresses."
}
```
```json
{
  "error.email.address": "One or more email addresses are invalid."
}
```

- ### subject value is empty or length exceeds 100 characters.
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

- ### messageText value length exceeds 2000 characters.
```json
{
  "error.message.too.long": "The message is too long."
}
```

- ### baseOutputFilename value is empty, exceeds 200 characters, or is otherwise invalid.
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

- ### outputFormat value is empty.
```json
{
  "error.output.format": "Formats should not be empty"
}
```

- ### folderURI value is empty or user does not have proper permissions.
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