import { Text } from '@/components/atoms';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { View } from 'react-native';
import RNToast, { ToastConfigParams } from 'react-native-toast-message';

type ToastTypes =
    "success" |
    "error" |
    "info" |
    "warning";

const CustomToast: React.FC<ToastConfigParams<unknown>> = ({ type: typeProps, text1, text2 }) => {
    const theme = useTheme();
    const type = typeProps as ToastTypes;
    return (
        <View style={{ backgroundColor: theme.toast[type], borderRadius: Spacing.md, padding: Spacing.sm, maxWidth: 250 }}>
            <Text variant='labelMd'>{text1}</Text>
            <Text variant='labelSm' style={{flexWrap: 'wrap'}}>{text2}</Text>
        </View>
    );
}

const toastConfig = {
    success: (props: ToastConfigParams<unknown>) => <CustomToast {...props} />,
    error: (props: ToastConfigParams<unknown>) => <CustomToast {...props} />,
    info: (props: ToastConfigParams<unknown>) => <CustomToast {...props} />,
    warning: (props: ToastConfigParams<unknown>) => <CustomToast {...props} />,
}

const Toast = () => {
    return (
        <RNToast position='top' config={toastConfig} />
    );
}

export default Toast;