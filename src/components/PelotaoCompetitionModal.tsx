import React from 'react';
import { PelotaoCompetitionView } from './PelotaoCompetitionView';

interface PelotaoCompetitionModalProps {
  onClose: () => void;
  currentUser?: string;
}

/**
 * Encapsulador de compatibilidade: renderiza em tela cheia sem recortes ou limites de modal
 */
export const PelotaoCompetitionModal: React.FC<PelotaoCompetitionModalProps> = ({
  onClose,
  currentUser = ''
}) => {
  return (
    <PelotaoCompetitionView
      onBackToApp={onClose}
      currentUser={currentUser}
    />
  );
};
