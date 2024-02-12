import { useEffect } from "react";
import { Button, useTheme } from "aetherui-react";

export default function SampleButton() {
  const { updateTheme } = useTheme();
  useEffect(() => {
    updateTheme({
      light: {
        color: {
          primary: {
            text: "#005FDB",
          },
        },
      },
    });
  }, []);
  return <Button />;
}
