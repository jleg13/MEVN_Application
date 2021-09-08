# DropBearTable.ApiuserApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**guestReservationPOST**](ApiuserApi.md#guestReservationPOST) | **POST** /guest-reservation | Save reservation as a guest user
[**loginGuestPOST**](ApiuserApi.md#loginGuestPOST) | **POST** /login/guest | Login in as a guest user
[**loginPOST**](ApiuserApi.md#loginPOST) | **POST** /login | Login in as a registered user
[**signupPOST**](ApiuserApi.md#signupPOST) | **POST** /signup | Add a new user
[**userIdNotificationGET**](ApiuserApi.md#userIdNotificationGET) | **GET** /{userId}/notification | 
[**userIdReservationGET**](ApiuserApi.md#userIdReservationGET) | **GET** /{userId}/reservations/{reservationId} | Get a reservation of a user by reservation Id
[**userIdReservationsGET**](ApiuserApi.md#userIdReservationsGET) | **GET** /{userId}/reservations | Get all reservation of a user
[**userIdReservationsPOST**](ApiuserApi.md#userIdReservationsPOST) | **POST** /{userId}/reservations | Post a new reservation for a user
[**userIdReservationsReservationIdDELETE**](ApiuserApi.md#userIdReservationsReservationIdDELETE) | **DELETE** /{userId}/reservations/{reservationId} | Delete a reservation of a user
[**userIdReservationsReservationIdPUT**](ApiuserApi.md#userIdReservationsReservationIdPUT) | **PUT** /{userId}/reservations/{reservationId} | Update a reservation of a user

<a name="guestReservationPOST"></a>
# **guestReservationPOST**
> InlineResponse2012 guestReservationPOST(body)

Save reservation as a guest user

### Example
```javascript
import {DropBearTable} from 'drop_bear_table';

let apiInstance = new DropBearTable.ApiuserApi();
let body = new DropBearTable.GuestreservationBody(); // GuestreservationBody | Reservation object that needs to be saved to database

apiInstance.guestReservationPOST(body, (error, data, response) => {
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
 **body** | [**GuestreservationBody**](GuestreservationBody.md)| Reservation object that needs to be saved to database | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loginGuestPOST"></a>
# **loginGuestPOST**
> InlineResponse2003 loginGuestPOST(body)

Login in as a guest user

### Example
```javascript
import {DropBearTable} from 'drop_bear_table';

let apiInstance = new DropBearTable.ApiuserApi();
let body = new DropBearTable.LoginGuestBody(); // LoginGuestBody | User object to login in

apiInstance.loginGuestPOST(body, (error, data, response) => {
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
 **body** | [**LoginGuestBody**](LoginGuestBody.md)| User object to login in | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loginPOST"></a>
# **loginPOST**
> InlineResponse2003 loginPOST(body)

Login in as a registered user

### Example
```javascript
import {DropBearTable} from 'drop_bear_table';

let apiInstance = new DropBearTable.ApiuserApi();
let body = new DropBearTable.LoginBody(); // LoginBody | User object to login in

apiInstance.loginPOST(body, (error, data, response) => {
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
 **body** | [**LoginBody**](LoginBody.md)| User object to login in | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="signupPOST"></a>
# **signupPOST**
> InlineResponse2011 signupPOST(body)

Add a new user

### Example
```javascript
import {DropBearTable} from 'drop_bear_table';

let apiInstance = new DropBearTable.ApiuserApi();
let body = new DropBearTable.SignupBody(); // SignupBody | User object to save to database

apiInstance.signupPOST(body, (error, data, response) => {
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
 **body** | [**SignupBody**](SignupBody.md)| User object to save to database | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userIdNotificationGET"></a>
# **userIdNotificationGET**
> userIdNotificationGET(userId)



### Example
```javascript
import {DropBearTable} from 'drop_bear_table';

let apiInstance = new DropBearTable.ApiuserApi();
let userId = "userId_example"; // String | userId to send notification

apiInstance.userIdNotificationGET(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| userId to send notification | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userIdReservationGET"></a>
# **userIdReservationGET**
> InlineResponse201 userIdReservationGET(userId, reservationId)

Get a reservation of a user by reservation Id

### Example
```javascript
import {DropBearTable} from 'drop_bear_table';

let apiInstance = new DropBearTable.ApiuserApi();
let userId = "userId_example"; // String | userId to find reservations
let reservationId = "reservationId_example"; // String | reservationId to update

apiInstance.userIdReservationGET(userId, reservationId, (error, data, response) => {
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
 **userId** | **String**| userId to find reservations | 
 **reservationId** | **String**| reservationId to update | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userIdReservationsGET"></a>
# **userIdReservationsGET**
> InlineResponse201 userIdReservationsGET(userId)

Get all reservation of a user

### Example
```javascript
import {DropBearTable} from 'drop_bear_table';

let apiInstance = new DropBearTable.ApiuserApi();
let userId = "userId_example"; // String | userId to find reservations

apiInstance.userIdReservationsGET(userId, (error, data, response) => {
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
 **userId** | **String**| userId to find reservations | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userIdReservationsPOST"></a>
# **userIdReservationsPOST**
> InlineResponse2012 userIdReservationsPOST(body, userId)

Post a new reservation for a user

### Example
```javascript
import {DropBearTable} from 'drop_bear_table';

let apiInstance = new DropBearTable.ApiuserApi();
let body = new DropBearTable.UserIdReservationsBody(); // UserIdReservationsBody | Reservation object that needs to be saved to database
let userId = "userId_example"; // String | userId to find reservations

apiInstance.userIdReservationsPOST(body, userId, (error, data, response) => {
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
 **body** | [**UserIdReservationsBody**](UserIdReservationsBody.md)| Reservation object that needs to be saved to database | 
 **userId** | **String**| userId to find reservations | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userIdReservationsReservationIdDELETE"></a>
# **userIdReservationsReservationIdDELETE**
> InlineResponse2004 userIdReservationsReservationIdDELETE(userId, reservationId)

Delete a reservation of a user

### Example
```javascript
import {DropBearTable} from 'drop_bear_table';

let apiInstance = new DropBearTable.ApiuserApi();
let userId = "userId_example"; // String | userId to find reservation
let reservationId = "reservationId_example"; // String | reservationId to delete

apiInstance.userIdReservationsReservationIdDELETE(userId, reservationId, (error, data, response) => {
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
 **userId** | **String**| userId to find reservation | 
 **reservationId** | **String**| reservationId to delete | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userIdReservationsReservationIdPUT"></a>
# **userIdReservationsReservationIdPUT**
> InlineResponse2012 userIdReservationsReservationIdPUT(body, userId, reservationId)

Update a reservation of a user

### Example
```javascript
import {DropBearTable} from 'drop_bear_table';

let apiInstance = new DropBearTable.ApiuserApi();
let body = new DropBearTable.ReservationsReservationIdBody(); // ReservationsReservationIdBody | Reservation object that needs to be saved to database
let userId = "userId_example"; // String | userId to find reservation
let reservationId = "reservationId_example"; // String | reservationId to update

apiInstance.userIdReservationsReservationIdPUT(body, userId, reservationId, (error, data, response) => {
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
 **body** | [**ReservationsReservationIdBody**](ReservationsReservationIdBody.md)| Reservation object that needs to be saved to database | 
 **userId** | **String**| userId to find reservation | 
 **reservationId** | **String**| reservationId to update | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

