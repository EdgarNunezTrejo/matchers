import { Divider, Text } from "@/components/atoms";
import { Spacing } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

type OrDividerProps = {
    label?: string;
}

const OrDivider: React.FC<OrDividerProps> = ({ label = "OR CONTINUE WITH" }) => {
    return (
        <View style={style.container}>
            <Divider style={{ flex: 1 }} />
            <Text variant="bodyMd">
                {label}
            </Text>
            <Divider style={{ flex: 1 }} />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: Spacing.sm,
        alignItems: 'center',
        width: '100%'
    },
});

export default OrDivider;
