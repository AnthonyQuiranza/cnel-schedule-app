
import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Box,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const idTypes = [
  { value: 'IDENTIFICACION', label: 'Identificación' },
  { value: 'CUENTA_CONTRATO', label: 'Número de Contrato' },
  { value: 'CUEN', label: 'Código único' },
];

function SearchForm({ onSearch }) {
  const [idValue, setIdValue] = useState('');
  const [idType, setIdType] = useState('IDENTIFICACION');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!idValue.trim()) {
      errors.idValue = 'Este campo es obligatorio.';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onSearch(idValue.trim(), idType);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Número de Identificación"
        value={idValue}
        onChange={(e) => setIdValue(e.target.value)}
        fullWidth
        required
        error={!!errors.idValue}
        helperText={errors.idValue}
        sx={{ mb: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        select
        label="Tipo de Identificación"
        value={idType}
        onChange={(e) => setIdType(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      >
        {idTypes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" size="large" fullWidth>
        Consultar
      </Button>
    </Box>
  );
}

export default SearchForm;