# Google Apps Script Setup Instructions for CURA Diabetes Registration

## Step 1: Open Google Apps Script

1. Go to: https://script.google.com
2. Click **"New Project"** (or open your existing script if you have one)
3. Delete any existing code in the editor

## Step 2: Paste the Code

Copy the code from `GOOGLE_APPS_SCRIPT_CODE.js` file and paste it into the Apps Script editor.

**Important:** The script already has your Google Sheet ID configured: `1Cuk4dP88P8P5BoH49M0mr7q9ENHltZBKH5mOAjouGNI`

## Step 3: Set Up Your Google Sheet Headers

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1Cuk4dP88P8P5BoH49M0mr7q9ENHltZBKH5mOAjouGNI/edit
2. In Row 1 (the header row), add these column headers in this exact order:
   - Column A: `fullName`
   - Column B: `age`
   - Column C: `email`
   - Column D: `phone`
   - Column E: `relationship`
   - Column F: `diabetesType`
   - Column G: `dateOfDiagnosis`
   - Column H: `currentMedications`
   - Column I: `otherInfo`
   - Column J: `Timestamp` (optional, but recommended)

## Step 4: Deploy as Web App

1. In the Apps Script editor, click **"Deploy"** → **"New deployment"**
2. Click the gear icon ⚙️ next to **"Select type"** and choose **"Web app"**
3. Configure:
   - **Description**: "CURA Patient Registration Form"
   - **Execute as**: **Me** (your Google account)
   - **Who has access**: **Anyone** (important for form submissions!)
4. Click **"Deploy"**
5. **COPY THE WEB APP URL** that appears - this is your script URL
6. Click **"Done"**

## Step 5: Authorize the Script

1. When you first run or deploy, you'll be asked to authorize
2. Click **"Authorize access"**
3. Choose your Google account
4. Click **"Advanced"** → **"Go to [Project Name] (unsafe)"**
5. Click **"Allow"** to give permissions

## Step 6: Update Your Form with the New URL

1. Copy the Web App URL from Step 4
2. Update your form code with this new URL (replace the old one in `app/patient-portal/page.tsx`)

## Step 7: Test It!

1. Fill out the registration form on your website
2. Submit it
3. Check your Google Sheet - you should see a new row with the data!

## Troubleshooting

### If data doesn't appear:

1. **Check Sheet Permissions**: Make sure the Apps Script has access to the sheet
   - In Apps Script, go to **Resources** → **Advanced Google Services**
   - Make sure Google Sheets API is enabled

2. **Check Column Headers**: Make sure your sheet has headers in Row 1

3. **Check Deployment Settings**: 
   - Make sure "Who has access" is set to **"Anyone"**
   - Make sure "Execute as" is set to **"Me"**

4. **Test the Script**:
   - In Apps Script editor, run the `testDoPost` function
   - Check the Execution log for any errors

5. **Check Execution Log**:
   - In Apps Script, go to **Executions** to see if requests are being received
   - Check for any error messages

### Common Errors:

- **"Script function not found: doGet"**: You need `doPost`, not `doGet`
- **"Execution failed"**: Check permissions and authorization
- **"Access denied"**: Make sure "Who has access" is set to "Anyone"

## Important Notes:

- Every time you modify the script code, you need to create a **New Version** in deployment
- Go to **Deploy** → **Manage deployments** → Edit → **New version** → Deploy
- The Web App URL stays the same, but you need to deploy a new version for changes to take effect

