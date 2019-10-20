
// Get cadastros
app.get('/projects',( req, res ) => {

  res.json( projects )
})

//Get pelo id do projeto
app.get('/projects/:id', checkProjects, (req, res) => {
const { id } = req.params;

const project = projects.find(p => p.id == id);

return res.json(project);
});


//Put
app.put('/projects/:id', checkProjects, ( req, res ) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find( p => p.id === id )

  project.title = title;

  res.json( projects )

})

//Delete
app.delete('/projects/:id', checkProjects, (req, res) => {
const { id } = req.params;

const projectIndex = projects.findIndex(p => p.id == id);

projects.splice(projectIndex, 1);

return res.send(projects);
});

app.listen( 27027, () => {
  console.log( 'Server ON' );

})