
function showTab(tab) {
    // Get the tabs and forms
    const phoneTab = document.getElementById("phone-tab");
    const emailTab = document.getElementById("email-tab");
    const phoneForm = document.getElementById("phone-form");
    const emailForm = document.getElementById("email-form");

    // Toggle active class for tabs
    if (tab === "phone") {
        phoneTab.classList.add("active");
        emailTab.classList.remove("active");
        phoneForm.classList.add("active");
        emailForm.classList.remove("active");
    } else if (tab === "email") {
        emailTab.classList.add("active");
        phoneTab.classList.remove("active");
        emailForm.classList.add("active");
        phoneForm.classList.remove("active");
    }
}