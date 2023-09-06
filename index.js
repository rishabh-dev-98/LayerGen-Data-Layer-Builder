console.log("INNOVATION");

function selectedDataLayer() {
    var dataLayerSelected = document.getElementById("dataLayerSelect").value;
    var exampleDataLayerModalButton = document.getElementById("exampleDataLayerModalButton");
    var result = "";
    if(dataLayerSelected == "0") {
        exampleDataLayerModalButton.style.display = "none"
        result = 0;
    } else if(dataLayerSelected == "1") {
        exampleDataLayerModalButton.style.display = "block"
        result = 1;
    } else if(dataLayerSelected == "2") {
        exampleDataLayerModalButton.style.display = "block"
        result = 2;
    } else if(dataLayerSelected == "3") {
        exampleDataLayerModalButton.style.display = "block"
        result = 3;
    } else if(dataLayerSelected == "4") {
        exampleDataLayerModalButton.style.display = "block"
        result = 4;
    }
    return result;
}

function dropdown() {
    var dataLayerSelected = document.getElementById("dataLayerSelect").value;
    var eventLabel = document.getElementById("labelEvent");
    var eventName = document.getElementById("exampleInputEvent");
    var dataLabel = document.getElementById("labelEddldataName");
    var dataContenName = document.getElementById("eddldataName");
    var dataComponentLabel = document.getElementById("labelComponentName");
    var dataComponentName = document.getElementById("ComponentName");
    var dataGlobalComponentLabel = document.getElementById("labelGlobalComponentName");
    var dataGlobalComponentName = document.getElementById("GlobalComponentName");
    var textArea = document.getElementById("resultDataLayer");
    var pageCheckBox = document.getElementById("exampleCheck3")
    var pageCheckBoxLabel = document.getElementById("pageCheckboxLabel");
    var clickCheckBox = document.getElementById("exampleCheck4");
    var clickCheckBoxLabel = document.getElementById("clickCheckboxLabel");
    var userCheckBox = document.getElementById("exampleCheck1");
    var userCheckBoxLabel = document.getElementById("userCheckboxLabel");
    var impressionCheckBox = document.getElementById("exampleCheck2");
    var impressionCheckBoxLabel = document.getElementById("impressionCheckboxLabel");
    var impressionSuggestion = document.getElementById("impressionSuggestion");
    var globalComponentCheckBox = document.getElementById("exampleCheck6")
    var globalComponentCheckboxLabel = document.getElementById("globalComponentCheckboxLabel");
    var submitButton = document.getElementById("submitButton")
    var copyButton = document.getElementById("copyButton")
    var resetButton = document.getElementById("resetButton")
    var editButton = document.getElementById("editButton");
    var labelUser = document.getElementById("labelUser");
    var userField = document.getElementById("exampleInputDataLayerAttributes2");
    var labelPage = document.getElementById("labelPage");
    var pageField = document.getElementById("exampleInputDataLayerAttributes1");
    var labelClick = document.getElementById("labelClick");
    var clickField = document.getElementById("exampleInputDataLayerAttributes4");
    var standardCMCheckBox = document.getElementById("exampleCheck5");
    var errorCMCheckbox = document.getElementById("errorCMCheckbox")
    var errorEvent = document.getElementById("errorEvent");
    var errorDataContent = document.getElementById("errorDataContent");
    var errorPageCheckbox = document.getElementById("errorPageCheckbox");
    var errorPage = document.getElementById("errorPage");
    var errorClickCheckbox = document.getElementById("errorClickCheckbox");
    var errorClick = document.getElementById("errorClick");
    var errorUserCheckbox = document.getElementById("errorUserCheckbox");
    var errorUser = document.getElementById("errorUser");
    var errorImpressionCheckbox = document.getElementById("errorImpressionCheckbox");
    var errorDataComponent = document.getElementById("errorDataComponent");
    var errorDataGlobalComponent = document.getElementById("errorDataGlobalComponent");
    
    var copyAlert = document.getElementById("copyAlert");
    var editButton = document.getElementById("editButton");
    const tooltip = bootstrap.Tooltip.getInstance('#copyButton')
    tooltip.setContent({ '.tooltip-inner': 'Copy to clipboard' })
    
    var dataLayer = {};
    if(dataLayerSelected == "0") {
        eventName.style.display = "none";
        eventLabel.style.display = "none";
        dataLabel.style.display = "none";
        dataContenName.style.display = "none";
        dataComponentLabel.style.display = "none";
        dataGlobalComponentLabel.style.display = "none";
        dataGlobalComponentName.style.display = "none";
        dataComponentName.style.display = "none";
        pageCheckBox.style.display = "none";
        pageCheckBoxLabel.style.display = "none";
        clickCheckBox.style.display = "none";
        clickCheckBoxLabel.style.display = "none";
        userCheckBox.style.display = "none";
        userCheckBoxLabel.style.display = "none";
        impressionCheckBox.style.display = "none";
        impressionCheckBoxLabel.style.display = "none";
        impressionSuggestion.style.display = "none";
        document.getElementById("exampleCheck5").style.display = "none";
        document.getElementById("labelCMattributes").style.display = "none";
        document.getElementById("CMattributesSuggestion").style.display = "none";
        textArea.style.display = "none"
        submitButton.style.display = "none"
        copyButton.style.display = "none"
        resetButton.style.display = "none"
        editButton.style.display = "none"
        labelUser.style.display = "none"
        userField.style.display = "none"
        labelPage.style.display = "none"
        pageField.style.display = "none"
        labelClick.style.display = "none"
        clickField.style.display = "none"
        errorCMCheckbox.style.display = "none"
        errorEvent.style.display = "none"
        errorDataContent.style.display = "none"
        errorPageCheckbox.style.display = "none"
        errorPage.style.display = "none"
        errorClickCheckbox.style.display = "none"
        errorClick.style.display = "none"
        errorUserCheckbox.style.display = "none"
        errorUser.style.display = "none"
        errorImpressionCheckbox.style.display = "none"
        errorDataComponent.style.display = "none"
        errorDataGlobalComponent.style.display = "none";
        textArea.disabled = true;
        pageCheckBox.checked = false;
        clickCheckBox.checked = false;
        userCheckBox.checked = false;
        impressionCheckBox.checked = false;
        standardCMCheckBox.checked = false;
        globalComponentCheckBox.checked = false;
        textArea.innerHTML = '';
        eventName.value = '';
        dataContenName.value = '';
        dataComponentName.value = '';
        dataGlobalComponentName.value = '';
        pageField.value = '';
        userField.value = '';
        clickField.value = '';
        copyAlert.style.display = "none"
        globalComponentCheckBox.style.display = "none";
        globalComponentCheckboxLabel.style.display = "none";
    }
    if(dataLayerSelected == "1") {
        eventName.style.display = "block";
        eventLabel.style.display = "block";
        dataLabel.style.display = "block";
        dataContenName.style.display = "block";
        dataComponentLabel.style.display = "none";
        dataComponentName.style.display = "none";
        dataGlobalComponentLabel.style.display = "none";
        dataGlobalComponentName.style.display = "none";
        pageCheckBox.style.display = "block";
        pageCheckBoxLabel.style.display = "block";
        clickCheckBox.style.display = "block";
        clickCheckBoxLabel.style.display = "block";
        userCheckBox.style.display = "block";
        userCheckBoxLabel.style.display = "block";
        impressionCheckBox.style.display = "block";
        impressionCheckBoxLabel.style.display = "block";
        impressionSuggestion.style.display = "block";
        textArea.style.display = "none"
        submitButton.style.display = "block"
        copyButton.style.display = "none"
        resetButton.style.display = "none"
        editButton.style.display = "none"
        labelUser.style.display = "none"
        userField.style.display = "none"
        labelPage.style.display = "none"
        pageField.style.display = "none"
        labelClick.style.display = "none"
        clickField.style.display = "none"
        errorCMCheckbox.style.display = "none"
        errorEvent.style.display = "none"
        errorDataContent.style.display = "none"
        errorPageCheckbox.style.display = "none"
        errorPage.style.display = "none"
        errorClickCheckbox.style.display = "none"
        errorClick.style.display = "none"
        errorUserCheckbox.style.display = "none"
        errorUser.style.display = "none"
        errorImpressionCheckbox.style.display = "none"
        errorDataComponent.style.display = "none"
        errorDataGlobalComponent.style.display = "none";
        pageCheckBox.checked = false;
        clickCheckBox.checked = false;
        userCheckBox.checked = false;
        impressionCheckBox.checked = false;
        standardCMCheckBox.checked = false;
        globalComponentCheckBox.checked = false;
        textArea.innerHTML = '';
        eventName.value = '';
        dataContenName.value = '';
        dataComponentName.value = '';
        dataGlobalComponentName.value = '';
        pageField.value = '';
        userField.value = '';
        clickField.value = '';
        textArea.disabled = true;
        globalComponentCheckBox.style.display = "none";
        globalComponentCheckboxLabel.style.display = "none";
    } else {
        document.getElementById("labelEddldataName").style.display = "none";
        document.getElementById("eddldataName").style.display = "none";
    }
    if(dataLayerSelected == "2") {
        eventName.style.display = "block";
        eventLabel.style.display = "block";
        dataComponentLabel.style.display = "none";
        dataComponentName.style.display = "none";
        dataGlobalComponentLabel.style.display = "none";
        dataGlobalComponentName.style.display = "none";
        pageCheckBox.style.display = "block";
        pageCheckBoxLabel.style.display = "block";
        clickCheckBox.style.display = "block";
        clickCheckBoxLabel.style.display = "block";
        userCheckBox.style.display = "block";
        userCheckBoxLabel.style.display = "block";
        textArea.style.display = "none"
        submitButton.style.display = "block"
        copyButton.style.display = "none"
        resetButton.style.display = "none"
        editButton.style.display = "none"
        labelUser.style.display = "none"
        userField.style.display = "none"
        labelPage.style.display = "none"
        pageField.style.display = "none"
        labelClick.style.display = "none"
        clickField.style.display = "none"
        errorCMCheckbox.style.display = "none"
        errorEvent.style.display = "none"
        errorDataContent.style.display = "none"
        errorPageCheckbox.style.display = "none"
        errorPage.style.display = "none"
        errorClickCheckbox.style.display = "none"
        errorClick.style.display = "none"
        errorUserCheckbox.style.display = "none"
        errorUser.style.display = "none"
        errorImpressionCheckbox.style.display = "none"
        errorDataComponent.style.display = "none"
        errorDataGlobalComponent.style.display = "none";
        pageCheckBox.checked = false;
        clickCheckBox.checked = false;
        userCheckBox.checked = false;
        impressionCheckBox.checked = false;
        standardCMCheckBox.checked = false;
        globalComponentCheckBox.checked = false;
        textArea.innerHTML = '';
        eventName.value = '';
        dataContenName.value = '';
        dataComponentName.value = '';
        dataGlobalComponentName.value = '';
        pageField.value = '';
        userField.value = '';
        clickField.value = '';
        copyAlert.style.display = "none"
        textArea.disabled = true;
        globalComponentCheckBox.style.display = "none";
        globalComponentCheckboxLabel.style.display = "none";
    }
    if(dataLayerSelected == "3") {
        eventName.style.display = "block";
        eventLabel.style.display = "block";
        dataLabel.style.display = "none";
        dataContenName.style.display = "none";
        dataComponentLabel.style.display = "block";
        dataComponentName.style.display = "block";
        dataGlobalComponentLabel.style.display = "none";
        dataGlobalComponentName.style.display = "none";
        pageCheckBox.style.display = "block";
        pageCheckBoxLabel.style.display = "block";
        clickCheckBox.style.display = "block";
        clickCheckBoxLabel.style.display = "block";
        userCheckBox.style.display = "block";
        userCheckBoxLabel.style.display = "block";
        impressionCheckBox.style.display = "block";
        impressionCheckBoxLabel.style.display = "block";
        impressionSuggestion.style.display = "block";
        textArea.style.display = "none"
        submitButton.style.display = "block"
        copyButton.style.display = "none"
        resetButton.style.display = "none"
        editButton.style.display = "none"
        labelUser.style.display = "none"
        userField.style.display = "none"
        labelPage.style.display = "none"
        pageField.style.display = "none"
        labelClick.style.display = "none"
        clickField.style.display = "none"
        errorCMCheckbox.style.display = "none"
        errorEvent.style.display = "none"
        errorDataContent.style.display = "none"
        errorPageCheckbox.style.display = "none"
        errorPage.style.display = "none"
        errorClickCheckbox.style.display = "none"
        errorClick.style.display = "none"
        errorUserCheckbox.style.display = "none"
        errorUser.style.display = "none"
        errorImpressionCheckbox.style.display = "none"
        errorDataComponent.style.display = "none"
        errorDataGlobalComponent.style.display = "none";
        pageCheckBox.checked = false;
        clickCheckBox.checked = false;
        userCheckBox.checked = false;
        impressionCheckBox.checked = false;
        standardCMCheckBox.checked = false;
        globalComponentCheckBox.checked = false;
        textArea.innerHTML = '';
        eventName.value = '';
        dataContenName.value = '';
        dataComponentName.value = '';
        dataGlobalComponentName.value = '';
        pageField.value = '';
        userField.value = '';
        clickField.value = '';
        copyAlert.style.display = "none"
        textArea.disabled = true;
        globalComponentCheckBox.style.display = "block";
        globalComponentCheckboxLabel.style.display = "block";
    }
    if(dataLayerSelected == "4") {
        document.getElementById("exampleCheck5").style.display = "block";
        document.getElementById("labelCMattributes").style.display = "block";
        document.getElementById("CMattributesSuggestion").style.display = "block";
        eventName.style.display = "block";
        eventLabel.style.display = "block";
        dataLabel.style.display = "none";
        dataContenName.style.display = "none";
        dataComponentLabel.style.display = "none";
        dataGlobalComponentLabel.style.display = "none";
        dataGlobalComponentName.style.display = "none";
        dataComponentName.style.display = "none";
        pageCheckBox.style.display = "block";
        pageCheckBoxLabel.style.display = "block";
        clickCheckBox.style.display = "block";
        clickCheckBoxLabel.style.display = "block";
        userCheckBox.style.display = "block";
        userCheckBoxLabel.style.display = "block";
        impressionCheckBox.style.display = "block";
        impressionCheckBoxLabel.style.display = "block";
        impressionSuggestion.style.display = "block";
        textArea.style.display = "none"
        submitButton.style.display = "block"
        copyButton.style.display = "none"
        resetButton.style.display = "none"
        editButton.style.display = "none"
        labelUser.style.display = "none"
        userField.style.display = "none"
        labelPage.style.display = "none"
        pageField.style.display = "none"
        labelClick.style.display = "none"
        clickField.style.display = "none"
        errorCMCheckbox.style.display = "none"
        errorEvent.style.display = "none"
        errorDataContent.style.display = "none"
        errorPageCheckbox.style.display = "none"
        errorPage.style.display = "none"
        errorClickCheckbox.style.display = "none"
        errorClick.style.display = "none"
        errorUserCheckbox.style.display = "none"
        errorUser.style.display = "none"
        errorImpressionCheckbox.style.display = "none"
        errorDataComponent.style.display = "none"
        errorDataGlobalComponent.style.display = "none";
        pageCheckBox.checked = false;
        clickCheckBox.checked = false;
        userCheckBox.checked = false;
        impressionCheckBox.checked = false;
        standardCMCheckBox.checked = false;
        globalComponentCheckBox.checked = false;
        textArea.innerHTML = '';
        eventName.value = '';
        dataContenName.value = '';
        dataComponentName.value = '';
        dataGlobalComponentName.value = '';
        pageField.value = '';
        userField.value = '';
        clickField.value = '';
        copyAlert.style.display = "none"
        textArea.disabled = true;
        globalComponentCheckBox.style.display = "none";
        globalComponentCheckboxLabel.style.display = "none";
    } else {
        document.getElementById("exampleCheck5").style.display = "none";
        document.getElementById("labelCMattributes").style.display = "none";
        document.getElementById("CMattributesSuggestion").style.display = "none";
    }
}

function pageCheckbox() {
    var checkBox = document.getElementById("exampleCheck3");
    var errorPage = document.getElementById("errorPage");
    if(checkBox.checked == true) {
        document.getElementById("labelPage").style.display = "block";
        document.getElementById("exampleInputDataLayerAttributes1").style.display = "block";
        errorPage.style.display = "none"
    } else if(checkBox.checked == false) {
        document.getElementById("labelPage").style.display = "none";
        document.getElementById("exampleInputDataLayerAttributes1").style.display = "none";
        errorPage.style.display = "none"
    }
}

function clickCheckbox() {
    var checkBox = document.getElementById("exampleCheck4");
    var errorClick = document.getElementById("errorClick");
    if(checkBox.checked == true) {
        document.getElementById("labelClick").style.display = "block";
        document.getElementById("exampleInputDataLayerAttributes4").style.display = "block";
        errorClick.style.display = "none";
    } else if(checkBox.checked == false) {
        document.getElementById("labelClick").style.display = "none";
        document.getElementById("exampleInputDataLayerAttributes4").style.display = "none";
        errorClick.style.display = "none";
    }
}

function userCheckbox() {
    var checkBox = document.getElementById("exampleCheck1");
    var errorUser = document.getElementById("errorUser");
    if(checkBox.checked == true) {
        document.getElementById("labelUser").style.display = "block";
        document.getElementById("exampleInputDataLayerAttributes2").style.display = "block";
        errorUser.style.display = "none";
    } else if(checkBox.checked == false) {
        document.getElementById("labelUser").style.display = "none";
        document.getElementById("exampleInputDataLayerAttributes2").style.display = "none";
        errorUser.style.display = "none";
    }
}

function impressionCheckbox() {
    var checkBox = document.getElementById("exampleCheck2");
    var errorImpressionCheckbox = document.getElementById("errorImpressionCheckbox")
    var impressionsdataLayerAttributesArray = ['UI Section Impressions', 'UI Element Impressions'].sort();
    if(checkBox.checked == true) {
        errorImpressionCheckbox.style.display = "none"
        return impressionsdataLayerAttributesArray;
    } else if(checkBox.checked == false) {
        return [];
    }
}

function StadardCMCheckbox() {
    var checkBox5 = document.getElementById("exampleCheck5");
    var errorCMCheckbox = document.getElementById("errorCMCheckbox")
    var textArea = document.getElementById("resultDataLayer");
    var copyButton = document.getElementById("copyButton")
    var resetButton = document.getElementById("resetButton")
    var editButton = document.getElementById("editButton")
    var commonEmitterAttributesArray = ['App User ID', 'Domain', 'Environment', 'Event Name', 'Frontent App Name', 'Frontend App Platform', 'Frontend App Version', 'Is Filter', 'Is Modal', 'New Page Load', 'Page Args', 'Page Nav ID', 'Page Tags', 'Product', 'Timestamp', 'Trigger Page Args', 'Trigger Page Name', 'Trigger Page Nav ID', 'Trigger Page Tags',
    'Trigger UI Event', 'Trigger URI', 'Trigger UI Section', 'URI', 'siteSectionL1', 'siteSectionL2', 'siteSectionL3', 'siteSectionL4', 'Page Name', 'Previous Domain', 'Previous Page Args', 'Previous Page Name', 'Previous Page Nav ID', 'Previous Page Tags', 'Previous URI'].sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    if(checkBox5.checked == true) {
        errorCMCheckbox.style.display = "none"
        return commonEmitterAttributesArray;
    } else if(checkBox5.checked == false) {
        errorCMCheckbox.style.display = "block"
        textArea.style.display = "none";
        copyButton.style.display = "none";
        resetButton.style.display = "none";
        editButton.style.display = "none";
        return [];
    }
}

function globalComponentCheckbox() {
    var checkBox = document.getElementById("exampleCheck6");
    var errorDataGlobalComponent = document.getElementById("errorDataGlobalComponent");
    if(checkBox.checked == true) {
        document.getElementById("labelGlobalComponentName").style.display = "block";
        document.getElementById("GlobalComponentName").style.display = "block";
        errorDataGlobalComponent.style.display = "none"
    } else if(checkBox.checked == false) {
        document.getElementById("labelGlobalComponentName").style.display = "none";
        document.getElementById("GlobalComponentName").style.display = "none";
        errorDataGlobalComponent.style.display = "none"
    }
}

function copyToClipboard() {
    // Get the text field
    var copyText = document.getElementById("resultDataLayer");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    const tooltip = bootstrap.Tooltip.getInstance('#copyButton')
    tooltip.setContent({ '.tooltip-inner': 'copied!' })
}

function resetValues() {
    var dataLayerSelected = document.getElementById("dataLayerSelect");
    var pagedataLayerAttributes = document.getElementById("exampleInputDataLayerAttributes1")
    var userdataLayerAttributes = document.getElementById("exampleInputDataLayerAttributes2")
    var clickdataLayerAttributes = document.getElementById("exampleInputDataLayerAttributes4")
    var textArea = document.getElementById("resultDataLayer");
    var impressionCheckBox = document.getElementById("exampleCheck2");
    var standardCMCheckBox = document.getElementById("exampleCheck5");
    var pageDataLayerLabel = document.getElementById("labelPage");
    var clickDataLayerLabel = document.getElementById("labelClick");
    var userDataLayerLabel = document.getElementById("labelUser");
    var eventLabel = document.getElementById("labelEvent");
    var eventName = document.getElementById("exampleInputEvent");
    var dataLabel = document.getElementById("labelEddldataName");
    var dataContenName = document.getElementById("eddldataName");
    var pageCheckBox = document.getElementById("exampleCheck3")
    var pageCheckBoxLabel = document.getElementById("pageCheckboxLabel");
    var clickCheckBox = document.getElementById("exampleCheck4");
    var clickCheckBoxLabel = document.getElementById("clickCheckboxLabel");
    var userCheckBox = document.getElementById("exampleCheck1");
    var userCheckBoxLabel = document.getElementById("userCheckboxLabel");
    var impressionCheckBox = document.getElementById("exampleCheck2");
    var impressionCheckBoxLabel = document.getElementById("impressionCheckboxLabel");
    var impressionSuggestion = document.getElementById("impressionSuggestion");
    var submitButton = document.getElementById("submitButton")
    var copyButton = document.getElementById("copyButton")
    var resetButton = document.getElementById("resetButton")
    var editButton = document.getElementById("editButton");
    var dataComponentLabel = document.getElementById("labelComponentName");
    var dataComponentName = document.getElementById("ComponentName");
    var dataGlobalComponentLabel = document.getElementById("labelGlobalComponentName");
    var dataGlobalComponentName = document.getElementById("GlobalComponentName");
    var copyAlert = document.getElementById("copyAlert");
    var errorCMCheckbox = document.getElementById("errorCMCheckbox");
    var errorEvent = document.getElementById("errorEvent");
    var errorDataContent = document.getElementById("errorDataContent");
    var errorPageCheckbox = document.getElementById("errorPageCheckbox");
    var errorPage = document.getElementById("errorPage");
    var errorClickCheckbox = document.getElementById("errorClickCheckbox");
    var errorClick = document.getElementById("errorClick");
    var errorUserCheckbox = document.getElementById("errorUserCheckbox");
    var errorUser = document.getElementById("errorUser");
    var errorImpressionCheckbox = document.getElementById("errorImpressionCheckbox");
    var errorDataComponent = document.getElementById("errorDataComponent");
    var errorDataGlobalComponent = document.getElementById("errorDataGlobalComponent");
    var globalComponentCheckBox = document.getElementById("exampleCheck6")
    var globalComponentCheckboxLabel = document.getElementById("globalComponentCheckboxLabel");
    var exampleDataLayerModalButton = document.getElementById("exampleDataLayerModalButton");
    copyAlert.style.display = "none"
    dataLayerSelected.value = 0;
    pageCheckBox.checked = false;
    clickCheckBox.checked = false;
    userCheckBox.checked = false;
    impressionCheckBox.checked = false;
    standardCMCheckBox.checked = false;
    globalComponentCheckBox.checked = false;
    textArea.innerHTML = '';
    textArea.value = '';
    eventName.value = '';
    dataContenName.value = '';
    dataComponentName.value = '';
    pagedataLayerAttributes.value = '';
    userdataLayerAttributes.value = '';
    clickdataLayerAttributes.value = '';
    pagedataLayerAttributes.style.display = "none";
    userdataLayerAttributes.style.display = "none";
    clickdataLayerAttributes.style.display = "none";
    pageDataLayerLabel.style.display = "none";
    clickDataLayerLabel.style.display = "none";
    userDataLayerLabel.style.display = "none";
    eventName.style.display = "none";
    eventLabel.style.display = "none";
    dataLabel.style.display = "none";
    dataContenName.style.display = "none";
    pageCheckBox.style.display = "none";
    pageCheckBoxLabel.style.display = "none";
    clickCheckBox.style.display = "none";
    clickCheckBoxLabel.style.display = "none";
    userCheckBox.style.display = "none";
    userCheckBoxLabel.style.display = "none";
    impressionCheckBox.style.display = "none";
    impressionCheckBoxLabel.style.display = "none";
    impressionSuggestion.style.display = "none";
    document.getElementById("exampleCheck5").style.display = "none";
    document.getElementById("labelCMattributes").style.display = "none";
    document.getElementById("CMattributesSuggestion").style.display = "none";
    textArea.style.display = "none"
    submitButton.style.display = "none"
    copyButton.style.display = "none"
    resetButton.style.display = "none"
    editButton.style.display = "none"
    dataComponentLabel.style.display = "none";
    dataComponentName.style.display = "none";
    dataGlobalComponentLabel.style.display = "none";
    dataGlobalComponentName.style.display = "none";
    errorCMCheckbox.style.display = "none"
    errorEvent.style.display = "none"
    errorDataContent.style.display = "none"
    errorPageCheckbox.style.display = "none"
    errorPage.style.display = "none"
    errorClickCheckbox.style.display = "none"
    errorClick.style.display = "none"
    errorUserCheckbox.style.display = "none"
    errorUser.style.display = "none"
    errorImpressionCheckbox.style.display = "none"
    errorDataComponent.style.display = "none"
    errorDataGlobalComponent.style.display = "none";
    textArea.disabled = true;
    globalComponentCheckBox.style.display = "none";
    globalComponentCheckboxLabel.style.display = "none";
    exampleDataLayerModalButton.style.display = "none";
}

function eventKeyPress() {
    var errorEvent = document.getElementById("errorEvent");
    errorEvent.style.display = "none"
}

function dataContentKeyPress() {
    var errorDataContent = document.getElementById("errorDataContent");
    errorDataContent.style.display = "none"
}

function pageKeyPress() {
    var errorPage = document.getElementById("errorPage");
    errorPage.style.display = "none"
}

function clickKeyPress() {
    var errorClick = document.getElementById("errorClick");
    errorClick.style.display = "none"
}

function userKeyPress() {
    var errorUser = document.getElementById("errorUser");
    errorUser.style.display = "none"
}

function eventBlur() {
    var eventName = document.getElementById("exampleInputEvent").value;
    var errorEvent = document.getElementById("errorEvent");
    var textArea = document.getElementById("resultDataLayer")
    var copyButton = document.getElementById("copyButton")
    var resetButton = document.getElementById("resetButton")
    var editButton = document.getElementById("editButton");
    
    if(eventName == "") {
        errorEvent.style.display = "block"
    }
    if(errorEvent.style.display == "block") {
        textArea.style.display="none";
        copyButton.style.display="none";
        resetButton.style.display="none";
        editButton.style.display = "none"
    }
}

function dataContentBlur() {
    var dataContenName = document.getElementById("eddldataName").value;
    var errorDataContent = document.getElementById("errorDataContent");
    var textArea = document.getElementById("resultDataLayer")
    var copyButton = document.getElementById("copyButton")
    var resetButton = document.getElementById("resetButton")
    var editButton = document.getElementById("editButton")
    if(dataContenName == "") {
        errorDataContent.style.display = "block"
    }
    if(errorDataContent.style.display == "block") {
        textArea.style.display="none";
        copyButton.style.display="none";
        resetButton.style.display="none";
        editButton.style.display = "none"
    }
}

function pageBlur() {
    var pagedataLayerAttributes = document.getElementById("exampleInputDataLayerAttributes1").value;
    var errorPage = document.getElementById("errorPage");
    
    if(pagedataLayerAttributes == "") {
        errorPage.style.display = "block"
    }
    var textArea = document.getElementById("resultDataLayer")
    var copyButton = document.getElementById("copyButton")
    var resetButton = document.getElementById("resetButton")
    var editButton = document.getElementById("editButton")
    if(errorPage.style.display == "block") {
        textArea.style.display="none";
        copyButton.style.display="none";
        resetButton.style.display="none";
        editButton.style.display = "none"
    }
}

function clickBlur() {
    var clickdataLayerAttributes = document.getElementById("exampleInputDataLayerAttributes4").value;
    var errorClick = document.getElementById("errorClick");
    
    if(clickdataLayerAttributes == "") {
        errorClick.style.display = "block"
    }
    var textArea = document.getElementById("resultDataLayer")
    var copyButton = document.getElementById("copyButton")
    var resetButton = document.getElementById("resetButton")
    var editButton = document.getElementById("editButton")
    if(errorClick.style.display == "block") {
        textArea.style.display="none";
        copyButton.style.display="none";
        resetButton.style.display="none";
        editButton.style.display = "none"
    }
}

function userBlur() {
    var userdataLayerAttributes = document.getElementById("exampleInputDataLayerAttributes2").value;
    var errorUser = document.getElementById("errorUser");
    
    if(userdataLayerAttributes == "") {
        errorUser.style.display = "block"
    }
    var textArea = document.getElementById("resultDataLayer")
    var copyButton = document.getElementById("copyButton")
    var resetButton = document.getElementById("resetButton")
    var editButton = document.getElementById("editButton")
    if(errorUser.style.display == "block") {
        textArea.style.display="none";
        copyButton.style.display="none";
        resetButton.style.display="none";
        editButton.style.display = "none"
    }
}

function dataComponentKeyPress() {
    var errorDataComponent = document.getElementById("errorDataComponent");
    errorDataComponent.style.display = "none"
}

function dataComponentBlur() {
    var dataComponentName = document.getElementById("ComponentName").value;
    var errorDataComponent = document.getElementById("errorDataComponent");
    if(dataComponentName == "") {
        errorDataComponent.style.display = "block"
    }
    var textArea = document.getElementById("resultDataLayer")
    var copyButton = document.getElementById("copyButton")
    var resetButton = document.getElementById("resetButton")
    var editButton = document.getElementById("editButton")
    if(errorDataComponent.style.display == "block") {
        textArea.style.display="none";
        copyButton.style.display="none";
        resetButton.style.display="none";
        editButton.style.display = "none"
    }
}

function dataGlobalComponentKeyPress() {
    var errorDataGlobalComponent = document.getElementById("errorDataGlobalComponent");
    errorDataGlobalComponent.style.display = "none"
}

function dataGlobalComponentBlur() {
    var dataGlobalComponentName = document.getElementById("GlobalComponentName").value;
    var errorDataGlobalComponent = document.getElementById("errorDataGlobalComponent");
    if(dataGlobalComponentName == "") {
        errorDataGlobalComponent.style.display = "block"
    }
    var textArea = document.getElementById("resultDataLayer")
    var copyButton = document.getElementById("copyButton")
    var resetButton = document.getElementById("resetButton")
    var editButton = document.getElementById("editButton")
    if(errorDataGlobalComponent.style.display == "block") {
        textArea.style.display="none";
        copyButton.style.display="none";
        resetButton.style.display="none";
        editButton.style.display = "none"
    }
}

function copyButtonBlur() {
    const tooltip = bootstrap.Tooltip.getInstance('#copyButton')
    tooltip.setContent({ '.tooltip-inner': 'Copy to clipboard' })
}

function editDataLayer() {
    var textArea = document.getElementById("resultDataLayer")
    textArea.disabled = false;
}

function textAreaBlur() {
    var textArea = document.getElementById("resultDataLayer")
    textArea.disabled = true;
}

function DataLayerModal() {
    var dataLayerSelected = selectedDataLayer();
    var exampleDataLayerModalButton = document.getElementById("exampleDataLayerModalButton");
    var exampleDataLayerImage = document.getElementById("exampleDataLayerImage");
    if(dataLayerSelected == "0") {
        exampleDataLayerModalButton.style.display = "none"
    } else if(dataLayerSelected == "1") {
        exampleDataLayerImage.setAttribute("src", "./EDDL.PNG")
    } else if(dataLayerSelected == "2") {
        exampleDataLayerImage.setAttribute("src", "./ACDL.PNG")
    } else if(dataLayerSelected == "3") {
        exampleDataLayerImage.setAttribute("src", "./Standardisation.PNG")
    } else if(dataLayerSelected == "4") {
        exampleDataLayerImage.setAttribute("src", "./CM.PNG")
    }
    
}

function Submit() {
    var eventName = document.getElementById("exampleInputEvent").value.split(",")[0]
    var dataContenName = document.getElementById("eddldataName").value.split(",")[0];
    var dataComponentName = document.getElementById("ComponentName").value.split(",")[0];
    var dataGlobalComponentName = document.getElementById("GlobalComponentName").value.split(",")[0];
    var copyButton = document.getElementById("copyButton")
    var resetButton = document.getElementById("resetButton")
    var editButton = document.getElementById("editButton")
    var textArea = document.getElementById("resultDataLayer");
    var checkBox = document.getElementById("exampleCheck1");
    var checkBox2 = document.getElementById("exampleCheck2");
    var checkBox3 = document.getElementById("exampleCheck3");
    var checkBox4 = document.getElementById("exampleCheck4");
    var checkBox5 = document.getElementById("exampleCheck5");
    var pagedataLayerAttributes = document.getElementById("exampleInputDataLayerAttributes1").value.split(",");
    var userdataLayerAttributes = document.getElementById("exampleInputDataLayerAttributes2").value.split(",");
    var clickdataLayerAttributes = document.getElementById("exampleInputDataLayerAttributes4").value.split(",");
    for(let i=0;i<pagedataLayerAttributes.length;++i) {
        pagedataLayerAttributes[i] = pagedataLayerAttributes[i].trim();
    }
    for(let i=0;i<userdataLayerAttributes.length;++i) {
        userdataLayerAttributes[i] = userdataLayerAttributes[i].trim();
    }
    for(let i=0;i<clickdataLayerAttributes.length;++i) {
        clickdataLayerAttributes[i] = clickdataLayerAttributes[i].trim();
    }
    var pagedataLayerAttributesArray = pagedataLayerAttributes.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    var userdataLayerAttributesArray = userdataLayerAttributes.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    var clickdataLayerAttributesArray = clickdataLayerAttributes.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    var dataLayerSelected = selectedDataLayer();
    var errorCMCheckbox = document.getElementById("errorCMCheckbox")
    var errorEvent = document.getElementById("errorEvent");
    var errorDataContent = document.getElementById("errorDataContent");
    var errorDataComponent = document.getElementById("errorDataComponent");
    var errorPage = document.getElementById("errorPage");
    var errorClick = document.getElementById("errorClick");
    var errorUser = document.getElementById("errorUser");
    var errorDataGlobalComponent = document.getElementById("errorDataGlobalComponent");
    var copyAlert = document.getElementById("copyAlert");
    var dataLayer = {};
    if(dataLayerSelected == "1") {
        dataLayer.event = eventName;
        if(dataContenName != "") {
            Object.defineProperty(dataLayer, dataContenName, {
                value: {}
            })
        } else {
            Object.defineProperty(dataLayer, dataContenName, {
                value: ""
            })
        }
        var x = dataLayer[Object.getOwnPropertyNames(dataLayer)[1]];
        
        // PAGE RELATED DATA LAYER ATTRIBUTES
        if(checkBox3.checked == true) {
            for(let i=0;i<pagedataLayerAttributesArray.length;++i) {
                var element = pagedataLayerAttributesArray[i].trim();
                if(element != "") {
                    Object.defineProperty(x, element, {
                        value: "'Please provide appropriate value'"
                    })
                } else {
                    Object.defineProperty(x, element, {
                        value: ""
                    })
                }
            }
        } else if(checkBox3.checked == false) {
            document.getElementById("exampleInputDataLayerAttributes1").style.display = "none";
        }
        // CLICK RELATED DATA LAYER ATTRIBUTES
        if(checkBox4.checked == true) {
            for(let i=0;i<clickdataLayerAttributesArray.length;++i) {
                var element = clickdataLayerAttributesArray[i].trim();
                if(element != "") {
                    Object.defineProperty(x, element, {
                        value: "'Please provide appropriate value'"
                    })
                } else {
                    Object.defineProperty(x, element, {
                        value: ""
                    })
                }
            }
        } else if(checkBox3.checked == false) {
            document.getElementById("exampleInputDataLayerAttributes4").style.display = "none";
        }
        // USER RELATED DATA LAYER ATTRIBUTES
        if(checkBox.checked == true) {
            dataLayer.user = {};
            for(let i=0;i<userdataLayerAttributesArray.length;++i) {
                var element = userdataLayerAttributesArray[i].trim();
                if(element != ""){
                    Object.defineProperty(dataLayer.user, element, {
                        value: "'Please provide appropriate value'"
                    })
                } else {
                    Object.defineProperty(dataLayer.user, element, {
                        value: ""
                    })
                }
            }
        } else if(checkBox.checked == false) {
            document.getElementById("exampleInputDataLayerAttributes2").style.display = "none";
        }
        // IMPRESSIONS RELATED DATA LAYER ATTRIBUTES
        if(checkBox2.checked == true) {
            var impressionsdataLayerAttributesArray = impressionCheckbox();
            for(let i=0;i<impressionsdataLayerAttributesArray.length;++i) {
                var element = impressionsdataLayerAttributesArray[i];
                if(element != ""){
                    Object.defineProperty(x, element, {
                        value: "'Array[Please provide appropriate value]'"
                    })
                } else {
                    Object.defineProperty(x, element, {
                        value: ""
                    })
                }
            }
        }
        
        var objectArray = Object.entries(dataLayer);
        function printContentObject() {
            var result = '';
            if(Object.getOwnPropertyNames(dataLayer)[1] != "") {
                var nestedObj = dataLayer[Object.getOwnPropertyNames(dataLayer)[1]];
                for(let j=0;j<Object.getOwnPropertyNames(nestedObj).length;++j) {
                    result += "   " + "'" + Object.getOwnPropertyNames(nestedObj)[j] + "'" + " : "  + nestedObj[Object.getOwnPropertyNames(nestedObj)[j]] + " , " + "\n ";
                }
            }else {
                result += "";
            }
            return result.trim();
        }
        function printUserObject() {
            var result = '';
            if(Object.getOwnPropertyNames(dataLayer)[2] == "user") {
                var nestedObj = dataLayer[Object.getOwnPropertyNames(dataLayer)[2]];
                result += "    " + "'user'" + " : " + "{" + "\n";
                for(let j=0;j<Object.getOwnPropertyNames(nestedObj).length;++j) {
                    result += "    "  + "'" + Object.getOwnPropertyNames(nestedObj)[j] + "'" + " : " + nestedObj[Object.getOwnPropertyNames(nestedObj)[j]]  + " , " + "\n";
                }
            } else {
                result += "";
            }
            return result.trim();
        } 
        if(printContentObject() != "") {
            textArea.innerHTML = "{" + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[0] + "'" + " : "  + "'" + dataLayer[Object.getOwnPropertyNames(dataLayer)[0]] + "'"  + " , " + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[1] + "'" + " : " + "{" + "\n" + "    " + `${printContentObject()}` + "\n" + "  }" + " , " + "\n" +
        "  " + `${printUserObject()}` + "\n" + "  }" + "\n" + "}";
        }
        if(printUserObject() != "") {
            textArea.innerHTML = "{" + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[0] + "'" + " : "  + "'" + dataLayer[Object.getOwnPropertyNames(dataLayer)[0]] + "'" + " , " + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[1] + "'" + " : " + "{" + "\n" + "    " + `${printContentObject()}` + "\n" + "  }" + " , " + "\n" +
        "  " + `${printUserObject()}` + "\n" + "  }" + "\n" + "}";
        } else if(printUserObject() == "") {
            textArea.innerHTML = "{" + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[0] + "'" + " : "  + "'" + dataLayer[Object.getOwnPropertyNames(dataLayer)[0]] + "'" + " , " + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[1] + "'" + " : " + "{" + "\n" + "    " + `${printContentObject()}` + "\n" + "  }" + "\n" + "}";
        }
        if(dataContenName == "") {
            textArea.innerHTML = "{" + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[0] + "'" + " : "  + "'" + dataLayer[Object.getOwnPropertyNames(dataLayer)[0]] + "'" + " , " + "\n" + "  "  + `${printUserObject()}` + "\n" + "  }" + "\n" + "}";
        }
        if(eventName !="" && dataContenName !="") {
            textArea.style.display="block";
            copyButton.style.display="block";
            resetButton.style.display="block";
            editButton.style.display="block";
        }
        if(eventName !="") {
            errorEvent.style.display="none";
        } else {
            errorEvent.style.display="block";
        }
        if(dataContenName !="") {
            errorDataContent.style.display = "none";
        } else {
            errorDataContent.style.display = "block";
        }

        if(errorPage.style.display == "block" || errorClick.style.display == "block" || errorUser.style.display == "block") {
            textArea.style.display="none";
            copyButton.style.display="none";
            resetButton.style.display="none";
            editButton.style.display="none";
        }

        if(textArea.style.display == "block") {
            copyAlert.style.display = "block"
            setTimeout(function() {
                copyAlert.style.display = "none"
            }, 2000)
        }
        
    } else if(dataLayerSelected == "2" || dataLayerSelected == "4") { // ACDL NORMAL APPROACH and ACDL COMMON EMITTER APPROACH
        dataLayer.event = eventName;
        dataLayer.data = {};
        // PAGE RELATED DATA LAYER ATTRIBUTES
        if(checkBox3.checked == true) {
            for(let i=0;i<pagedataLayerAttributesArray.length;++i) {
                var element = pagedataLayerAttributesArray[i].trim();
                if(element != "") {
                    Object.defineProperty(dataLayer.data, element, {
                        value: "'Please provide appropriate value'"
                    })
                } else {
                    Object.defineProperty(dataLayer.data, element, {
                        value: ""
                    })
                }
            }
        } else if(checkBox3.checked == false) {
            document.getElementById("exampleInputDataLayerAttributes1").style.display = "none";
        }
        // CLICK RELATED DATA LAYER ATTRIBUTES
        if(checkBox4.checked == true) {
            for(let i=0;i<clickdataLayerAttributesArray.length;++i) {
                var element = clickdataLayerAttributesArray[i].trim();
                if(element != "") {
                    Object.defineProperty(dataLayer.data, element, {
                        value: "'Please provide appropriate value'"
                    })
                } else {
                    Object.defineProperty(dataLayer.data, element, {
                        value: ""
                    })
                }
            }
        } else if(checkBox3.checked == false) {
            document.getElementById("exampleInputDataLayerAttributes4").style.display = "none";
        }
        // USER RELATED DATA LAYER ATTRIBUTES
        if(checkBox.checked == true) {
            dataLayer.data.user = {};
            for(let i=0;i<userdataLayerAttributesArray.length;++i) {
                var element = userdataLayerAttributesArray[i].trim();
                if(element != ""){
                    Object.defineProperty(dataLayer.data.user, element, {
                        value: "'Please provide appropriate value'"
                    })
                } else {
                    Object.defineProperty(dataLayer.data.user, element, {
                        value: ""
                    })
                }
            }
        } else if(checkBox.checked == false) {
            document.getElementById("exampleInputDataLayerAttributes2").style.display = "none";
        }
        // IMPRESSIONS RELATED DATA LAYER ATTRIBUTES
        if(checkBox2.checked == true) {
            var impressionsdataLayerAttributesArray = impressionCheckbox();
            for(let i=0;i<impressionsdataLayerAttributesArray.length;++i) {
                var element = impressionsdataLayerAttributesArray[i];
                if(element != ""){
                    Object.defineProperty(dataLayer.data, element, {
                        value: "'Array[Please provide appropriate value]'"
                    })
                } else {
                    Object.defineProperty(dataLayer.data, element, {
                        value: ""
                    })
                }
            }
        }
        // COMMON EMITTER RELATED DATA LAYER ATTRIBUTES
        if(checkBox5.checked == true) {
            var commonEmitterAttributesArray = StadardCMCheckbox();
            for(let i=0;i<commonEmitterAttributesArray.length;++i) {
                var element = commonEmitterAttributesArray[i];
                if(element != ""){
                    Object.defineProperty(dataLayer.data, element, {
                        value: "'Please provide appropriate value'"
                    })
                } else {
                    Object.defineProperty(dataLayer.data, element, {
                        value: ""
                    })
                }
            }
        }
        var objectArray = Object.entries(dataLayer);
        var obj = objectArray[1][1];
        function printObject() {
            var result = '';
            for(let i=0;i<Object.getOwnPropertyNames(obj).length;++i) {
                if(typeof(obj[Object.getOwnPropertyNames(obj)[i]]) == "object") {
                    var nestedObj = obj[Object.getOwnPropertyNames(obj)[i]];
                    result += "    " + "'user'" + " : " + "{" + "\n" + "     ";
                    for(let j=0;j<Object.getOwnPropertyNames(nestedObj).length;++j) {
                        result += "  " + "'" + Object.getOwnPropertyNames(nestedObj)[j] + "'" + " : " + nestedObj[Object.getOwnPropertyNames(nestedObj)[j]] + " , " + "\n     ";
                    }
                    result = result.trim() + "\n" + "    } ," + "\n";
                } else {
                    result += "    " + "'" +  Object.getOwnPropertyNames(obj)[i] + "'" + " : " + obj[Object.getOwnPropertyNames(obj)[i]] + " , " + "\n";
                }
                
            }
            return result.trim();
        }
        textArea.innerHTML = "{" + "\n" + "  " + "'" + objectArray[0][0] + "'" + " : " + "'" + objectArray[0][1] + "'" + " , " + "\n" + "  " + "'" + objectArray[1][0] + "'" + " : " + "{" + "\n" + "    " + `${printObject()}` + "\n" + "  }" + "\n" + "}";
        if(dataLayerSelected == 2) {
            if(eventName !="") {
                textArea.style.display="block";
                copyButton.style.display="block";
                resetButton.style.display="block";
                editButton.style.display="block";
            }
        }

        if(eventName !="") {
            errorEvent.style.display="none";
        } else {
            errorEvent.style.display="block";
        }

        if(dataLayerSelected == "4") {
            if(eventName !="" && checkBox5.checked == true) {
                textArea.style.display="block";
                copyButton.style.display="block";
                resetButton.style.display="block";
                editButton.style.display="block";
            }
            if(checkBox5.checked == false ) {
                errorCMCheckbox.style.display = "block";
                textArea.style.display="none";
                copyButton.style.display="none";
                resetButton.style.display="none";
                editButton.style.display="none";
            } else {
                errorCMCheckbox.style.display = "none";
            }
        }

        if(errorPage.style.display == "block" || errorClick.style.display == "block" || errorUser.style.display == "block") {
            textArea.style.display="none";
            copyButton.style.display="none";
            resetButton.style.display="none";
            editButton.style.display="none";
        }

        if(textArea.style.display == "block") {
            copyAlert.style.display = "block"
            setTimeout(function() {
                copyAlert.style.display = "none"
            }, 2000)
        }

        
    } else if(dataLayerSelected == "3") {
        dataLayer.event = eventName;
        
        if(dataComponentName != "") {
            Object.defineProperty(dataLayer, dataComponentName, {
                value: {}
            })
        } else {
            Object.defineProperty(dataLayer, dataComponentName, {
                value: ""
            })
        }
        var x = dataLayer[Object.getOwnPropertyNames(dataLayer)[1]];
        // PAGE RELATED DATA LAYER ATTRIBUTES
        if(checkBox3.checked == true) {
            for(let i=0;i<pagedataLayerAttributesArray.length;++i) {
                var element = pagedataLayerAttributesArray[i].trim();
                if(element != "") {
                    Object.defineProperty(x, element, {
                        value: "'Please provide appropriate value'"
                    })
                } else {
                    Object.defineProperty(x, element, {
                        value: ""
                    })
                }
            }
        } else if(checkBox3.checked == false) {
            document.getElementById("exampleInputDataLayerAttributes1").style.display = "none";
        }
        // CLICK RELATED DATA LAYER ATTRIBUTES
        if(checkBox4.checked == true) {
            for(let i=0;i<clickdataLayerAttributesArray.length;++i) {
                var element = clickdataLayerAttributesArray[i].trim();
                if(element != "") {
                    Object.defineProperty(x, element, {
                        value: "'Please provide appropriate value'"
                    })
                } else {
                    Object.defineProperty(x, element, {
                        value: ""
                    })
                }
            }
        } else if(checkBox3.checked == false) {
            document.getElementById("exampleInputDataLayerAttributes4").style.display = "none";
        }
        // USER RELATED DATA LAYER ATTRIBUTES
        if(checkBox.checked == true) {
            dataLayer.user = {};
            for(let i=0;i<userdataLayerAttributesArray.length;++i) {
                var element = userdataLayerAttributesArray[i].trim();
                if(element != ""){
                    Object.defineProperty(dataLayer.user, element, {
                        value: "'Please provide appropriate value'"
                    })
                } else {
                    Object.defineProperty(dataLayer.user, element, {
                        value: ""
                    })
                }
            }
        } else if(checkBox.checked == false) {
            document.getElementById("exampleInputDataLayerAttributes2").style.display = "none";
        }
        // IMPRESSIONS RELATED DATA LAYER ATTRIBUTES
        if(checkBox2.checked == true) {
            var impressionsdataLayerAttributesArray = impressionCheckbox();
            for(let i=0;i<impressionsdataLayerAttributesArray.length;++i) {
                var element = impressionsdataLayerAttributesArray[i];
                if(element != ""){
                    Object.defineProperty(x, element, {
                        value: "'Array[Please provide appropriate value]'"
                    })
                } else {
                    Object.defineProperty(x, element, {
                        value: ""
                    })
                }
            }
        }

        var objectArray = Object.entries(dataLayer);
        function printContentObject() {
            var result = '';
            if(Object.getOwnPropertyNames(dataLayer)[1] != "") {
                var nestedObj = dataLayer[Object.getOwnPropertyNames(dataLayer)[1]];
                for(let j=0;j<Object.getOwnPropertyNames(nestedObj).length;++j) {
                    result += "   " + "'" + Object.getOwnPropertyNames(nestedObj)[j] + "'" + " : " + nestedObj[Object.getOwnPropertyNames(nestedObj)[j]] + " , " + "\n ";
                }
            }else {
                result += "";
            }
            return result.trim();
        }
        function printUserObject() {
            var result = '';
            if(Object.getOwnPropertyNames(dataLayer)[2] == "user") {
                var nestedObj = dataLayer[Object.getOwnPropertyNames(dataLayer)[2]];
                result += "    " + "'user'" + " : " + "{" + "\n";
                for(let j=0;j<Object.getOwnPropertyNames(nestedObj).length;++j) {
                    result += "    "  + "'" + Object.getOwnPropertyNames(nestedObj)[j] + "'" + " : " + nestedObj[Object.getOwnPropertyNames(nestedObj)[j]] + " , " + "\n";
                }
            } else {
                result += "";
            }
            return result.trim();
        } 
        if(dataGlobalComponentName !="") {
            if(printContentObject() != "") {
                console.log(" content object not empty")
                textArea.innerHTML = "{" + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[0] + "'" + " : " + "'" + dataLayer[Object.getOwnPropertyNames(dataLayer)[0]] + "'" + " , " + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[1] + "'" + " : " + "{" + "\n" + "    " + `${printContentObject()}` + "\n" + "  }" + " , " + "\n" +
            "  " + `${printUserObject()}` + "\n" + "  }" + " , " + "\n" + "  " + "'component'" + " : " + "{" + "\n" + "   " + "'name'" + " : " + "'" + dataGlobalComponentName + "'" + "\n" + "  " + "}" + "\n" + "}";
            }
            if(printUserObject() != "") {
                console.log(" user object not empty")
                textArea.innerHTML = "{" + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[0] + "'" + " : " + "'" + dataLayer[Object.getOwnPropertyNames(dataLayer)[0]] + "'" + " , " + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[1] + "'" + " : " + "{" + "\n" + "    " + `${printContentObject()}` + "\n" + "  }" + " , " + "\n" +
            "  " + `${printUserObject()}` + "\n" + "  }" + " , " + "\n" + "  " + "'component'" + " : " + "{" + "\n" + "   " + "'name'" + " : " + "'" + dataGlobalComponentName + "'" + "\n" + "  " + "}" + "\n" + "}";
            } else if(printUserObject() == "") {
                console.log(" user object empty")
                textArea.innerHTML = "{" + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[0] + "'" + " : " + "'" + dataLayer[Object.getOwnPropertyNames(dataLayer)[0]] + "'" + " , " + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[1] + "'" + " : " + "{" + "\n" + "    " + `${printContentObject()}` + "\n" + "  }" + " , " + "\n" + "  " + "'component'" + " : " + "{" + "\n" + "   " + "'name'" + " : " + "'" + dataGlobalComponentName + "'" + "\n" + "  " + "}" + "\n" + "}";
            }
            if(dataComponentName == "") {
                textArea.innerHTML = "{" + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[0] + "'" + " : " + "'" + dataLayer[Object.getOwnPropertyNames(dataLayer)[0]] + "'" + " , " + "\n" + "  "  + `${printUserObject()}` + "\n" + "  }" + " , " + "\n" + "  " + "'component'" + " : " + "{" + "\n" + "   " + "'name'" + " : " + "'" + dataGlobalComponentName + "'" + "\n" + "  " + "}" + "\n" + "}";
            }
        } else if(dataGlobalComponentName == "") {
            console.log("global component object empty.")
            if(printContentObject() != "") {
                console.log(" content object not empty")
                textArea.innerHTML = "{" + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[0] + "'" + " : " + "'" + dataLayer[Object.getOwnPropertyNames(dataLayer)[0]] + "'" + " , " + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[1] + "'" + " : " + "{" + "\n" + "    " + `${printContentObject()}` + "\n" + "  }" + " , " + "\n" +
            "  " + `${printUserObject()}` + "\n" + "  }" + "\n" + "}";
            }
            if(printUserObject() != "") {
                console.log(" user object not empty")
                textArea.innerHTML = "{" + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[0] + "'" + " : " + "'" + dataLayer[Object.getOwnPropertyNames(dataLayer)[0]] + "'" + " , " + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[1] + "'" + " : " + "{" + "\n" + "    " + `${printContentObject()}` + "\n" + "  }" + " , " + "\n" +
            "  " + `${printUserObject()}` + "\n" + "  }" + "\n" + "}";
            } else if(printUserObject() == "") {
                console.log(" user object empty")
                textArea.innerHTML = "{" + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[0] + "'" + " : " + "'" + dataLayer[Object.getOwnPropertyNames(dataLayer)[0]] + "'" + " , " + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[1] + "'" + " : " + "{" + "\n" + "    " + `${printContentObject()}` + "\n" + "  }" + "\n" + "}";
            }
            if(dataComponentName == "") {
                textArea.innerHTML = "{" + "\n" + "  " + "'" + Object.getOwnPropertyNames(dataLayer)[0] + "'" + " : " + "'" + dataLayer[Object.getOwnPropertyNames(dataLayer)[0]] + "'" + " , " + "\n" + "  "  + `${printUserObject()}` + "\n" + "  }" + "\n" + "}";
            }
        }
        
        if(eventName !="" && dataComponentName !="") {
            textArea.style.display="block";
            copyButton.style.display="block";
            resetButton.style.display="block";
            editButton.style.display="block";
        }
        if(eventName !="") {
            errorEvent.style.display="none";
        } else {
            errorEvent.style.display="block";
        }
        if(dataComponentName !="") {
            errorDataComponent.style.display = "none";
        } else {
            errorDataComponent.style.display = "block";
        }

        if(errorPage.style.display == "block" || errorClick.style.display == "block" || errorUser.style.display == "block" || errorDataGlobalComponent.style.display == "block") {
            textArea.style.display="none";
            copyButton.style.display="none";
            resetButton.style.display="none";
            editButton.style.display="none";
        }

        if(textArea.style.display == "block") {
            copyAlert.style.display = "block"
            setTimeout(function() {
                copyAlert.style.display = "none"
            }, 2000)
        }
    }
    textArea.value = textArea.innerHTML
    textArea.style.fontWeight = "bold";
}