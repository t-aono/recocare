import { FormControl, FormLabel } from "@chakra-ui/react"
import { HStack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";

import styles from "../../MainStyles.module.css";

export const SensitiveRadioCheck = (props) => {
  const { sensitive, setSensitive, feature, setFeature } = props;

  const onChangeRadio = (e) => setSensitive(e);
  const onChangeCheckbox = (e) => setFeature(e);

  return (
    <>
      <FormControl as="fieldset" mt="5" isRequired>
        <FormLabel as="legend" className={styles.questionTitle}>敏感肌</FormLabel>
        <RadioGroup value={sensitive} onChange={(e) => onChangeRadio(e)}>
          <HStack spacing="24px">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <FormControl as="fieldset" mt="5">
        <FormLabel as="legend" className={styles.questionTitle, (sensitive !== 'yes') ? styles.featureInactive : ''}>特徴</FormLabel>
        <CheckboxGroup value={feature} onChange={(e) => onChangeCheckbox(e)}>
          <HStack spacing="24px" className={(sensitive !== 'yes') ? styles.featureInactive : ''}>
            <Checkbox value="1">防腐剤不使用</Checkbox>
            <Checkbox value="2">無香料</Checkbox>
            <Checkbox value="3">アルコールフリー</Checkbox>
            <Checkbox value="4">パラベンフリー</Checkbox>
          </HStack>
          <HStack className={(sensitive !== 'yes') ? styles.featureInactive : ''}>
            <Checkbox value="5">紫外線吸収剤不使用</Checkbox>
          </HStack>
        </CheckboxGroup>
      </FormControl>
    </>
  );
}