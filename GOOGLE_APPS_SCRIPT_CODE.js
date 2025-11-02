/**
 * Google Apps Script for CURA Diabetes Patient Registration Form
 * This script receives form data and saves it to Google Sheets
 */

function doPost(e) {
  try {
    // Replace this with your Google Sheet ID from the URL
    var SHEET_ID = '1Cuk4dP88P8P5BoH49M0mr7q9ENHltZBKH5mOAjouGNI';
    
    // Open the spreadsheet by ID
    var sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Parse the incoming form data
    var data = {};
    
    // Check if data comes as URL-encoded parameters
    if (e.parameter) {
      data = e.parameter;
    } 
    // Check if data comes in postData (for JSON)
    else if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = {};
      }
    }
    
    // Get current timestamp in Cairo, Egypt timezone
    var now = new Date();
    var cairoTimeZone = 'Africa/Cairo';
    var timestamp = Utilities.formatDate(now, cairoTimeZone, 'yyyy-MM-dd HH:mm:ss');
    
    // Prepare the row data in the correct order
    // Make sure these column names match your sheet headers!
    var rowData = [
      data.fullName || '',
      data.age || '',
      data.email || '',
      data.phone || '',
      data.relationship || '',
      data.diabetesType || '',
      data.dateOfDiagnosis || '',
      data.currentMedications || '',
      data.otherInfo || '',
      timestamp // Timestamp column in Cairo timezone
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response (optional - helps with debugging)
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: 'Data saved successfully',
        timestamp: timestamp
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log the error for debugging
    Logger.log('Error: ' + error.toString());
    Logger.log('Stack: ' + error.stack);
    
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * doGet function - Handles GET requests (for testing)
 * This prevents the "doGet not found" error when accessing the URL directly
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: 'success',
      message: 'Google Apps Script is running. Use POST method to submit form data.',
      note: 'This script accepts POST requests from the registration form.'
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function - Run this to verify the script works
 * You can run this from the Apps Script editor to test
 */
function testDoPost() {
  var testData = {
    parameter: {
      fullName: 'Test User',
      age: '30',
      email: 'test@example.com',
      phone: '+20 1234567890',
      relationship: 'Patient',
      diabetesType: 'Type 2',
      dateOfDiagnosis: '2020-01-01',
      currentMedications: 'Metformin 500mg',
      otherInfo: 'Test submission from script'
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}

