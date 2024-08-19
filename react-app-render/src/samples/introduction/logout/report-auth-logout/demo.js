// Visualize: UI for Login/Logout

//create and render report to specific container
export const viz=(v)=>{
    const createReport= (uri) => {
        v("#reportLogout").report({
            resource: uri,
            error: (err)=> {
                alert(err.message);
            }
        });
    };
    const toggle = (className, displayState) => {
        let elements = document.getElementsByClassName(className)
        elements.forEach((eachEle) => {
            eachEle.style.display = displayState
        })
    }

    const showMessage=(selector)=>{
        toggle("logout-message", 'none')
        toggle(selector, block)
    };

    const getAuthData = () => {
        return {name: document.getElementById("j_username").value,
            password: document.getElementById("j_password").value,
            organization:document.getElementById("orgId").value,
            locale:document.getElementById("userLocale").value,
            timezone:document.getElementById("userTimezone").value
        }
    };

    const selectedResource = document.getElementById("report-logout-selected_resource")
    selectedResource.addEventListener('change', () => {
        document.getElementById("reportLogout").innerHTML = "";
        createReport(selectedResource.value, v);
    })
    document.getElementById("report-logout-login-btn").addEventListener("click", ()=>{
        v.login(getAuthData()).done(()=>{
            createReport(selectedResource.val(),v);
            showMessage("success");
        }).fail(()=>{
            showMessage("error");
        });
    })
    document.getElementById("report-logout-btn").addEventListener("click", ()=>{
        v.logout().done(() => {
            showMessage("logout");
        });
    })
    document.getElementById('report-logout-selected_resource').disabled = false
};

