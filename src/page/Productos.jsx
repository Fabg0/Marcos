import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import Divider from '@mui/material/Divider';
import { Avatar, Rating } from '@mui/material';

import arete1 from '../arete1.jpg';
import arete2 from '../arete2.jpg';
import arete3 from '../arete3.jpg';
import arete4 from '../arete4.jpg';

const productos = [
  {
    id: 1,
    nombre: 'Pendientes de Plata Estrella',
    variante: 'Plata 925',
    precio: 49.99,
    stock: 120,
    categoria: 'Pendientes',
    rating: 4.8,
    reviews: 30,
    imagen: arete1,
  },
  {
    id: 2,
    nombre: 'Anillo de Compromiso en Plata',
    variante: 'Plata 925',
    precio: 159.99,
    stock: 45,
    categoria: 'Pendientes',
    rating: 4.9,
    reviews: 50,
    imagen: arete2,
  },
  {
    id: 3,
    nombre: 'Pulsera de Plata con Perlas',
    variante: 'Plata 925',
    precio: 79.99,
    stock: 60,
    categoria: 'Pulseras',
    rating: 4.7,
    reviews: 20,
    imagen: arete3,
  },
  {
    id: 4,
    nombre: 'Collar de Plata y Zirconias',
    variante: 'Plata 925',
    precio: 89.99,
    stock: 30,
    categoria: 'Collares',
    rating: 4.5,
    reviews: 25,
    imagen: arete4,
  },
];

export default function Productos() {
  return (
    <div>
      <Typography variant="h4">Control de inventario</Typography>
      <TableContainer component={Paper} style={{ fontSize: '1.2rem', width: '100%' }}>
        <Typography variant="h6" align="center" gutterBottom style={{ fontSize: '1rem' }}>
          Productos
        </Typography>
        <Divider style={{ marginBottom: '20px' }} />
        <Table style={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: '1.2rem', width: '15%' }}>Imagen</TableCell>
              <TableCell style={{ fontSize: '1.2rem', width: '25%' }}>Nombre</TableCell>
              <TableCell style={{ fontSize: '1.2rem', width: '15%' }}>Precio</TableCell>
              <TableCell style={{ fontSize: '1.2rem', width: '10%' }}>Stock</TableCell>
              <TableCell style={{ fontSize: '1.2rem', width: '15%' }}>Categoría</TableCell>
              <TableCell style={{ fontSize: '1.2rem', width: '10%' }}>Rating</TableCell>
              <TableCell style={{ fontSize: '1.2rem', width: '10%' }}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productos.map((producto) => (
              <TableRow key={producto.id}>
                <TableCell>
                  <Avatar alt={producto.nombre} src={producto.imagen} variant="square" style={{ width: '80px', height: '80px' }} />
                </TableCell>
                <TableCell>
                  {producto.nombre} <br /> {producto.variante}
                </TableCell>
                <TableCell>${producto.precio.toFixed(2)}</TableCell>
                <TableCell>{producto.stock}</TableCell>
                <TableCell>{producto.categoria}</TableCell>
                <TableCell>
                  <Rating value={producto.rating} readOnly precision={0.1} />{' '}
                  {producto.rating} ({producto.reviews} reviews)
                </TableCell>
                <TableCell>
                  <IconButton>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton>
                    <DownloadIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
