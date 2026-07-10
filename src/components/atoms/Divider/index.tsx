import { useTheme } from "@/hooks/use-theme";
import { StyleProp, View, ViewStyle } from "react-native";

type DividerProps = {
    horizontal?: boolean;
    style?: StyleProp<ViewStyle>;
}

const Divider: React.FC<DividerProps> = ({ horizontal = true, style }) => {
    const theme = useTheme();
    return (
        <View style={[{backgroundColor: theme.divider.default, ...horizontal ? { width: '100%', height: 1 } : { width: 1, height: '100%' } }, style]} />
    );
}

export default Divider;
