import { Text } from "@/components";
import { Modal } from "@/components/molecules";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { ScrollView, StyleSheet } from "react-native";

const Policy = () => {
    const theme = useTheme();
    return (
        <Modal>
            <ScrollView style={{ backgroundColor: theme.background.primary }} contentContainerStyle={style.container} showsVerticalScrollIndicator={false}>
                <Text variant="headlineMd">Privacy Policy</Text>
                <Text variant="labelMd" style={style.textContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sapien orci, dictum ut sollicitudin sit amet, lacinia et orci. Sed nec tempor ipsum. Nam facilisis nisi et lorem laoreet lacinia. Integer et metus mauris. Etiam pellentesque quam vitae volutpat sagittis. Cras fringilla vehicula rutrum. Nunc eget ultricies neque. Sed nec eros vel orci pellentesque condimentum quis vitae ligula. Quisque gravida vel nulla sed dapibus. Proin vitae lectus vestibulum, rutrum tortor non, aliquet orci. Sed finibus ac urna ut imperdiet. Mauris lacus enim, malesuada sit amet lacus non, molestie tempor quam. Cras auctor consectetur tempor. Sed ipsum mauris, pellentesque sit amet nisl non, euismod luctus neque. Duis eget ultrices eros.

                    Ut lobortis erat sit amet libero suscipit, vel tincidunt massa sollicitudin. Aliquam pulvinar, ligula maximus sodales consequat, magna dolor iaculis quam, at gravida eros enim sed nunc. Quisque gravida lectus purus, et semper leo ullamcorper sed. Maecenas ac diam ante. Curabitur sodales, erat et sodales elementum, dolor lacus gravida urna, sit amet fringilla leo ex ut nunc. Morbi eleifend augue orci, at lacinia nisl scelerisque sed. Ut pharetra mollis molestie. Praesent metus dolor, dignissim nec convallis non, facilisis vel tortor. Ut eu mauris ac purus tempus congue nec eget enim. Suspendisse porttitor lorem auctor nisi pulvinar lacinia.

                    Pellentesque ac diam ac massa pellentesque hendrerit pellentesque quis lacus. Curabitur malesuada, ligula at ullamcorper fringilla, nibh eros eleifend leo, ut dictum odio quam vitae justo. Sed placerat massa quis dui hendrerit, eu sagittis ante fermentum. Maecenas quam nisl, volutpat sed purus nec, bibendum convallis massa. Ut ac tempus lectus. Pellentesque mi mauris, aliquet sed nulla a, molestie gravida nisl. In hac habitasse platea dictumst. In purus nisi, mollis tempus tellus in, molestie tempus nunc.

                    Cras a metus pharetra nisi facilisis interdum ac at ligula. Praesent eleifend dui sed dictum faucibus. Vestibulum id leo vitae diam suscipit gravida. Morbi lacinia at nulla a condimentum. Vestibulum ut arcu ac enim gravida cursus. Phasellus at diam eget nunc auctor gravida. Nullam ac arcu convallis, gravida lacus vel, consequat leo. Duis elementum, diam nec eleifend maximus, nunc orci sollicitudin eros, quis condimentum quam mauris et sapien. Quisque eget pretium augue, sit amet tristique elit. Nulla fermentum est at ex molestie mattis. Sed laoreet scelerisque venenatis. Aliquam auctor dolor tincidunt elit porta, a ullamcorper libero rhoncus. Quisque elit ex, congue ultrices eros vel, aliquet volutpat quam. Curabitur in faucibus neque.

                    Phasellus finibus sapien ultricies finibus suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ex nibh, pharetra ut massa vel, ullamcorper convallis nulla. Phasellus eget metus urna. Pellentesque a cursus ipsum, id egestas dolor. Ut at augue commodo, aliquet tellus eu, interdum orci. Vestibulum vitae eros quis velit vulputate congue vitae non purus.
                </Text>
            </ScrollView>
        </Modal>
    );
}

const style = StyleSheet.create(
    {
        container: {
            alignItems: 'center',
            gap: Spacing.sm,
            paddingHorizontal: Spacing.md,
            paddingBottom: Spacing.lg
        },
        textContent:{
            textAlign: 'justify'
        }
    }
);

export default Policy;
