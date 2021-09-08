# DropBearTable.ApirestaurantApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**restaurantIdGET**](ApirestaurantApi.md#restaurantIdGET) | **GET** /{restaurantId} | Get details of a resuarant
[**restaurantIdScheduleGET**](ApirestaurantApi.md#restaurantIdScheduleGET) | **GET** /{restaurantId}/schedule | Get a restaurants schedule
[**rootGET**](ApirestaurantApi.md#rootGET) | **GET** / | Get all restaurants
[**rootPOST**](ApirestaurantApi.md#rootPOST) | **POST** / | Add an new restaurant

<a name="restaurantIdGET"></a>
# **restaurantIdGET**
> InlineResponse2001 restaurantIdGET(restaurantId)

Get details of a resuarant

### Example
```javascript
import {DropBearTable} from 'drop_bear_table';

let apiInstance = new DropBearTable.ApirestaurantApi();
let restaurantId = "restaurantId_example"; // String | ID of restaurant to return

apiInstance.restaurantIdGET(restaurantId, (error, data, response) => {
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
 **restaurantId** | **String**| ID of restaurant to return | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="restaurantIdScheduleGET"></a>
# **restaurantIdScheduleGET**
> InlineResponse2002 restaurantIdScheduleGET(restaurantId)

Get a restaurants schedule

### Example
```javascript
import {DropBearTable} from 'drop_bear_table';

let apiInstance = new DropBearTable.ApirestaurantApi();
let restaurantId = "restaurantId_example"; // String | ID of restaurant to return

apiInstance.restaurantIdScheduleGET(restaurantId, (error, data, response) => {
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
 **restaurantId** | **String**| ID of restaurant to return | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rootGET"></a>
# **rootGET**
> InlineResponse200 rootGET()

Get all restaurants

### Example
```javascript
import {DropBearTable} from 'drop_bear_table';

let apiInstance = new DropBearTable.ApirestaurantApi();
apiInstance.rootGET((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rootPOST"></a>
# **rootPOST**
> InlineResponse201 rootPOST(body)

Add an new restaurant

### Example
```javascript
import {DropBearTable} from 'drop_bear_table';

let apiInstance = new DropBearTable.ApirestaurantApi();
let body = new DropBearTable.Body(); // Body | Restaurant object that needs to be saved to database

apiInstance.rootPOST(body, (error, data, response) => {
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
 **body** | [**Body**](Body.md)| Restaurant object that needs to be saved to database | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

