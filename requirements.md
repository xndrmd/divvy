divisor de costos

- gastos
  - un gasto puede ser cualquier cosa, desde un chicle hasta la boleta del mercado de la semana
  - un gasto puede pertenecer a una categoria
- categoria
  - una categoria es una forma de definir un gasto
  - una categoria sugiere como se debe dividir el gasto
- grupo
  - un grupo es un grupo de personas que comparten el gasto
- usuarios pueden crear grupos
- usuarios pueden agregar otros usuarios al grupo, solo si el usuario que realiza la acción es administrador del grupo
- usuarios pueden remover otros usuarios del grupo, solo si el usuario que realiza la acción es administrador del grupo
- al registrar un gasto se define quien pago
- al registrar un gasto se puede seleccionar una categoria
- al registrar un gasto y seleccionar una categoria se propone como se debe dividir el gasgasto
- al registrar un gasto y hay una categoria seleccionada y tiene una propuesta de como se divide el gasto se puede sobrescribir
- cierre de mes

  - se cierra el grupo
  - se calcula la deuda del grupo
  - se plantea un periodo para saldar la deuda del grupo

- reportes
  - un reporte es una manera rapida de visualizar los movimientos de un periodo (dia, semana, mes, año, etc)
  -

Tech stack

- Base de datos: postgres
- ORM: drizzle
- Frontend: NextJs
- Backend: express / NestJs
- CSS: Tailwind
- Lenguaje de programacion: Typescript
- Conrol de versiones: Git
- turborepo
