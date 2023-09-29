import { Image, ScrollView, Text, TouchableOpacity, View, TextInput } from "react-native";
import CAPA from "../../assets/CAPA.png";
import {
  Button,
  Dialog,
  Portal,
  RadioButton
} from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import Toast from "react-native-toast-message";
import api from "../../api";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export function Home() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {},
  });
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const showToast = (tipo, message1, message2) => {
    Toast.show({
      type: tipo,
      text1: message1,
      text2: message2,
    });
  };

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/sugestoes", data);
      const message1 = "Parabéns";
      const message2 = "Sugestão enviada com sucesso!";
      const tipo = "success";
      showToast(tipo, message1, message2);
      limparForm();
    } catch (error) {
      console.log("error ao enviar o formulário", error);
      const message1 = "Ooops";
      const message2 = "Erro ao enviar formulário!";
      const tipo = "error";
      showToast(tipo, message1, message2);
    }
  };

  const limparForm = async () => {
    await reset({
      tipo: "",
      sugestao: "",
      nome: "",
      setor: "",
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerImage}>
          <Image
            source={CAPA}
            alt="logo"
            resizeMode="cover"
            style={styles.logo}
          />
        </View>
        <View style={styles.line} />

        {/* Intro */}
        <View style={styles.containerIntro}>
          <View style={{ gap: 2, marginTop: 10, paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 30 }}>Iniciativas</Text>
            <Text style={{ fontSize: 14, textAlign: "justify" }}>
              Este formulário de iniciativas tem como objetivo permitir que
              você, como membro da equipe, proponha ideias e projetos que possam
              melhorar nossas práticas, processos e resultados como empresa. Há
              sempre espaço para melhorias e ideias inovadoras, por isso
              queremos saber de você: Em que e como podemos melhorar?
            </Text>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: "red" }}>
                * Indica uma pergunta obrigatória
              </Text>
            </View>
          </View>
        </View>

        {/* Tipo Sugestão */}
        <View style={styles.containerPerguntas}>
          <View style={{ padding: 24, marginTop: 10, paddingHorizontal: 20 }}>
            <View
              style={{ flexDirection: "row", gap: 15, alignItems: "center" }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 18 }}>Tipo da Sugestão</Text>
                <Text style={{ color: "red" }}>*</Text>
              </View>
              <TouchableOpacity onPress={showDialog}>
                <FontAwesome name="info-circle" size={20} color="black" />
              </TouchableOpacity>
            </View>

            <View style={{ gap: 10, marginTop: 10 }}>
              <Controller
                control={control}
                name="tipo_sugestao"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <RadioButton.Group onValueChange={onChange} value={value}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <RadioButton color="#33C1ED" value="Despesa" />
                      <Text>Despesa</Text>
                    </View>

                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <RadioButton value="Receita" />
                      <Text>Receita</Text>
                    </View>
                  </RadioButton.Group>
                )}
              />
            </View>
          </View>
        </View>

        {/* Sugestão */}
        <View style={styles.containerPerguntas}>
          <View style={{ padding: 24, marginTop: 10, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 16 }}>Sugestão</Text>
              <Text style={{ color: "red" }}>*</Text>
            </View>

            <Controller
              control={control}
              name="sugestao"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Sugestão"
                  style={{ backgroundColor: "#f5f5f5", marginTop: 20, height:50, paddingLeft:10 }}
                  multiline
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </View>
        </View>

        {/* Nome */}
        <View style={styles.containerPerguntas}>
          <View style={{ padding: 24, marginTop: 10, paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 16 }}>Nome</Text>

            <Controller
              control={control}
              name="nome"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Seu nome"
                  style={{ backgroundColor: "#f5f5f5", marginTop: 20, height:50, paddingLeft:10 }}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </View>
        </View>

        {/* setor */}
        <View style={styles.containerPerguntas}>
          <View style={{ padding: 24, marginTop: 10, paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 16 }}>Setor</Text>

            <Controller
              control={control}
              name="setor"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Setor"
                  style={{ backgroundColor: "#f5f5f5", marginTop: 20, height:50, paddingLeft:10 }}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.containerButtons}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.btnEnviar}
          >
            <Text style={{ color: "#ffff", fontSize: 14 }}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnLimpar}
            onPress={() => limparForm()}
          >
            <Text style={{ color: "#1496CC", fontSize: 14, fontWeight: "600" }}>
              Limpar formulário
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Toast position="top" bottomOffset={20} />
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Receitas</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              Todo valor que ingressa na empresa proveniente da atividade empresarial.
            </Text>
          </Dialog.Content>
          <Dialog.Title>Despesas</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
                Toda saída de valores necessários à atividade da empresa.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Fechar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}
