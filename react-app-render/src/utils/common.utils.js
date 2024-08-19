export const convertToString = (viz) => {
        if(viz.toString) {
                return viz.toString()
        }
        return `${viz}`

}

export const authString = 
`{  
    auth: {
        organization: "organization_1",
        name: "joeuser",
        password: "joeuser",
    }
},`;

export const authErrorHandlerString = 
`, error => {
    alert("Error esteblishing connection to JasperReports Server: " + error.message);
}`;

export const getReactContent = (id, vizInString) => {
        return "const RenderVisualize = () => {\n" +
            "  React.useEffect(() => {\n" +
            `    ${vizInString}\n` +
            "  }, [])\n" +
            "\n" +
            "  return(null)\n" +
            "}\n" +
            `const root = ReactDOM.createRoot(document.getElementById("${id}"));\n` +
            "root.render(\n" +
            "  <React.StrictMode>\n" +
            "    <RenderVisualize />\n" +
            "  </React.StrictMode>\n" +
            ");"
}