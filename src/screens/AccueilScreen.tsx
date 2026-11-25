// src/screens/AccueilScreen.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import TacheCard from '../components/TacheCard';
import { COULEURS } from '../styles/couleurs';

export interface Tache {
  id: string;
  titre: string;
  categorie: string;
  terminee: boolean;
}

const TACHES: Tache[] = [
  { id: '1', titre: 'Créer un la maquette', categorie: 'Design', terminee: true },
  { id: '2', titre: 'Installer expo', categorie: 'Setup', terminee: true },
  { id: '3', titre: "Composant TacheCard", categorie: 'Dev', terminee: false },
  { id: '4', titre: 'Ecran d\'accueil', categorie: 'Dev', terminee: false },
  { id: '5', titre: 'Tester sur téléphone', categorie: 'QA', terminee: false },
];

export default function AccueilScreen() {
  return (
    <SafeAreaView style={styles.ecran}>
      <View style={styles.entete}>
        <Text style={styles.titreApp}>TaskFlow</Text>
        <Text style={styles.sousTitre}>Organisez vos tâches du quotidien</Text>
      </View>

      <ScrollView
        style={styles.liste}
        contentContainerStyle={styles.contenuListe}
        showsVerticalScrollIndicator={false}
      >
        {TACHES.map((tache: Tache) => (
          <TacheCard
            key={tache.id}
            titre={tache.titre}
            categorie={tache.categorie}
            terminee={tache.terminee}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: COULEURS.fond,
  },
  entete: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
    flexDirection: 'column',
    gap: 4,
  },
  titreApp: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COULEURS.primaire,
  },
  sousTitre: {
    fontSize: 15,
    color: COULEURS.muted,
  },
  liste: {
    flex: 1,
  },
  contenuListe: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    flexGrow: 1,
    justifyContent: 'flex-start',
    gap: 12,
  },
});
