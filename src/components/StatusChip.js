import { Chip } from 'react-native-paper';

// Chip colorido pela cor do status. Se "ativo", fica preenchido; senão, só o contorno.
export default function StatusChip({ status, ativo = true, rotulo, compact, aoPressionar }) {
  return (
    <Chip
      compact={compact}
      icon={status.icon}
      mode={ativo ? 'flat' : 'outlined'}
      onPress={aoPressionar}
      selectedColor={ativo ? '#FFFFFF' : undefined}
      style={ativo ? { backgroundColor: status.cor } : undefined}
    >
      {rotulo ?? status.label}
    </Chip>
  );
}
