from flask_sqlalchemy import SQLAlchemy
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields
import enum


db = SQLAlchemy()

albumes_canciones = db.Table('album_cancion',
    db.Column('album_id', db.Integer, db.ForeignKey('album.id'), primary_key = True),
    db.Column('cancion_id', db.Integer, db.ForeignKey('cancion.id'), primary_key = True))

canciones_compartida_usuarios = db.Table('cancion_compartida_usuario',
    db.Column('usuario_id', db.Integer, db.ForeignKey('usuario.id'), primary_key = True),
    db.Column('cancion_id', db.Integer, db.ForeignKey('cancion.id'), primary_key = True))

album_compartido_usuarios = db.Table('album_compartido_usuario',
    db.Column('usuario_id', db.Integer, db.ForeignKey('usuario.id'), primary_key = True),
    db.Column('album_id', db.Integer, db.ForeignKey('album.id'), primary_key = True))

album_comentarios = db.Table('album_comentario',
    db.Column('comentario_id', db.Integer, db.ForeignKey('comentario.id'), primary_key = True),
    db.Column('album_id', db.Integer, db.ForeignKey('album.id'), primary_key = True))

class Comentario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comentario = db.Column(db.String(512))
    estado = db.Column(db.Integer)
    albumes = db.relationship('Album', secondary='album_comentario', back_populates="comentarios")


class Cancion(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    titulo = db.Column(db.String(128))
    minutos = db.Column(db.Integer)
    segundos = db.Column(db.Integer)
    interprete = db.Column(db.String(128))
    albumes = db.relationship('Album', secondary='album_cancion', back_populates="canciones")
    usuarios = db.relationship('Usuario', secondary='cancion_compartida_usuario', back_populates="CancionesCompartidas")

class Medio(enum.Enum):
   DISCO = 1
   CASETE = 2
   CD = 3

class Album(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(128))
    anio = db.Column(db.Integer)
    descripcion = db.Column(db.String(512))
    medio = db.Column(db.Enum(Medio))
    usuario = db.Column(db.Integer, db.ForeignKey("usuario.id"))
    canciones = db.relationship('Cancion', secondary = 'album_cancion', back_populates="albumes")
    comentarios = db.relationship('Comentario', secondary='album_comentario')
    usuariosCompartido = db.relationship('Usuario', secondary='album_compartido_usuario', back_populates="AlbumesCompartidos")
    __mapper_args__ = {
        'confirm_deleted_rows': False
    }

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50))
    contrasena = db.Column(db.String(50))
    albumes = db.relationship('Album', cascade='all, delete, delete-orphan')
    CancionesCompartidas = db.relationship('Cancion', secondary='cancion_compartida_usuario', back_populates="usuarios")
    AlbumesCompartidos = db.relationship('Album', secondary='album_compartido_usuario', back_populates="usuariosCompartido")
class EnumADiccionario(fields.Field):
    def _serialize(self, value, attr, obj, **kwargs):
        if value is None:
            return None
        return {"llave": value.name, "valor": value.value}

class CancionSchema(SQLAlchemyAutoSchema):
    class Meta:
         model = Cancion
         include_relationships = True
         load_instance = True

class AlbumSchema(SQLAlchemyAutoSchema):
    medio = EnumADiccionario(attribute=("medio"))
    class Meta:
         model = Album
         include_relationships = True
         load_instance = True

class UsuarioSchema(SQLAlchemyAutoSchema):
    class Meta:
         model = Usuario
         include_relationships = True
         load_instance = True

class ComentarioSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Comentario
        include_relationships = True
        load_instance = True