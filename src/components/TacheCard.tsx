import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COULEURS } from '../styles/couleurs';

export interface TacheCardProps {
  titre: string;
  categorie: string;
  terminee: boolean;
}

export default function TacheCard({ titre, categorie, terminee }: TacheCardProps) {
  return (
    <View style={terminee ? styles.carteTerminee : styles.carte}>
      <View style={styles.entete}>
        <Text style={terminee ? styles.titreTermine : styles.titre}>
          {titre}
        </Text>
        <Text style={terminee ? styles.indicateurFait : styles.indicateurEnCours}>
          {terminee ? '✓ terminée' : '○ A faire'}
        </Text>
      </View>

      <View style={styles.badge}>
        <Text style={styles.badgeTexte}>{categorie}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carte: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    // borderLeftWidth: 4,
    // borderLeftColor: COULEURS.accent,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  carteTerminee: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    // borderLeftWidth: 4,
    // borderLeftColor: COULEURS.muted,
    // opacity: 0.7,
    elevation: 1,
  },
  entete: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titre: {
    flex: 1,
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: COULEURS.texte,
  },
  titreTermine: {
    flex: 1,
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: COULEURS.primaire,
    // textDecorationLine: 'line-through',
  },
  indicateurFait: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COULEURS.accent,
  },
  indicateurEnCours: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COULEURS.muted,
  },
  badge: {
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: COULEURS.accent,
  },
  badgeTexte: {
    fontSize: 12,
    fontWeight: '600',
    color: COULEURS.primaire,
  },
});
