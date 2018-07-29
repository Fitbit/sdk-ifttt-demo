function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold>IFTTT Settings</Text>}>
        <TextInput
          label="API Key"
          settingsKey="apiKey"
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
