function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">IFTTT Settings</Text>}>
        <Text>Login to IFTTT.com, add a new Applet, If `WebHooks`, then `Event Name` `demo_trigger`, `Send me an email`.</Text>
        <Text>Enter API Key below. Find yours here: https://ifttt.com/services/maker_webhooks/settings</Text>
        <TextInput
          label="IFTTT API Key"
          settingsKey="apiKey"
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
