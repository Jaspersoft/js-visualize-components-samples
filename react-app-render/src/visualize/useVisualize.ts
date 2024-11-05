import { useEffect, useState } from 'react';
import { VisualizeFactory, VisualizeClient, visualizejsLoader } from "@jaspersoft/jv-tools";

const useVisualize = (visualizeUrl: string) => {
    const [vContainer, setVContainer] = useState<{ v: VisualizeClient } | null>(null);

    useEffect(() => {
        const loadVisualize = visualizejsLoader(visualizeUrl);
        console.log("Loading visualize.js...");
        loadVisualize()
            .then((visualizeFactory: VisualizeFactory) => {
                console.log("visualize.js loaded. Connecting to JRS...");
                visualizeFactory(
                    {
                        auth: {
                            name: "joeuser",
                            password: "joeuser",
                            organization: "organization_1",
                            locale: "en_US",
                        },
                    },
                    (v: VisualizeClient) => {
                        console.log("Visualize client connected.");
                        setVContainer({v});
                    },
                    (e: any) => {
                        console.log(String(e));
                    },
                );
            })
            .catch((error: Error) => {
                console.log("Error loading visualize.js: ", error);
            });
    }, [visualizeUrl]);

    return vContainer;
};

export default useVisualize;