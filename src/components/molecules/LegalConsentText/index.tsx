import { Link, Text } from "@/components/atoms";
import { StyleSheet, View } from "react-native";

type LegalConsentTextProps = {
    onPressTerms: () => void;
    onPressPrivacy: () => void;
    action: string;
}

const LegalConsentText: React.FC<LegalConsentTextProps> = ({ onPressTerms, onPressPrivacy, action }) => {
    return (
        <View style={style.container}>
            <Text variant="labelSm">
                By {action}, you agree our
            </Text>
            <Link onPress={onPressTerms} variant="labelSm">
                Terms of Service
            </Link>
            <Text variant="labelSm">
                and
            </Text>
            <Link onPress={onPressPrivacy} variant="labelSm">
                Privacy Policy
            </Link>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 4,
        flexWrap: 'wrap',
    }
});

export default LegalConsentText;
