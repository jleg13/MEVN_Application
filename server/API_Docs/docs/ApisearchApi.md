# DropBearTable.ApisearchApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dateTimeGuestsGET**](ApisearchApi.md#dateTimeGuestsGET) | **GET** /{date}/{time}/{guests} | Search based on date, time and keyword
[**keywordGET**](ApisearchApi.md#keywordGET) | **GET** /{keyword} | Search based on keyword

<a name="dateTimeGuestsGET"></a>
# **dateTimeGuestsGET**
> InlineResponse200 dateTimeGuestsGET(_date, time, guests)

Search based on date, time and keyword

### Example
```javascript
import {DropBearTable} from 'drop_bear_table';

let apiInstance = new DropBearTable.ApisearchApi();
let _date = "_date_example"; // String | date for search
let time = "time_example"; // String | time for search
let guests = "guests_example"; // String | guests for search

apiInstance.dateTimeGuestsGET(_date, time, guests, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| date for search | 
 **time** | **String**| time for search | 
 **guests** | **String**| guests for search | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="keywordGET"></a>
# **keywordGET**
> InlineResponse200 keywordGET(keyword)

Search based on keyword

### Example
```javascript
import {DropBearTable} from 'drop_bear_table';

let apiInstance = new DropBearTable.ApisearchApi();
let keyword = "keyword_example"; // String | keyword for search

apiInstance.keywordGET(keyword, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyword** | **String**| keyword for search | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

