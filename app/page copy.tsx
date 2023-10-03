"use client";
import {
  Menu,
  Button,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Item from "@mui/material/Grid";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function MainMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseClassifyIssues = () => {
    console.log("classify");
    setAnchorEl(null);
  };
  const [openCollapse, setOpenCollapse] = React.useState(false);
  const handleCollapseClick = () => {
    setOpenCollapse(!openCollapse);
  };

  return (
    <Grid container justifyContent="center">
      <Item style={{ paddingTop: "4px" }}>
        <Button
          id="menu-button"
          aria-aria-controls={open ? "menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="menu"
          aria-labelledby="menu-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <ListItemButton onClick={handleCollapseClick}>
            <ListItemText primary="ML Models" />
            {openCollapse ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openCollapse} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Ontologies" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Word Embeddings" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="ML Models" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Predict with ML Models" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleCloseClassifyIssues}>
            <ListItemText primary="Classify Issues" />
          </ListItemButton>
          <ListItemButton onClick={handleCloseClassifyIssues}>
            <ListItemText primary="Statistics" />
          </ListItemButton>
          <ListItemButton onClick={handleCloseClassifyIssues}>
            <ListItemText primary="Tags" />
          </ListItemButton>
          <ListItemButton onClick={handleCloseClassifyIssues}>
            <ListItemText primary="Search" />
          </ListItemButton>
          <ListItemButton onClick={handleCloseClassifyIssues}>
            <ListItemText primary="Login" />
          </ListItemButton>
        </Menu>
      </Item>
      <Item>
        <Button>
          <Typography variant="h4">Arch UI</Typography>
        </Button>
      </Item>
    </Grid>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <NextUIProvider>
      <Container style={{ marginTop: "10px", marginBottom: "10px" }}>
        <div>
          The current theme is: {theme}
          <button onClick={() => setTheme("light")}>Light Mode</button>
          <button onClick={() => setTheme("dark")}>Dark Mode</button>
        </div>
        <MainMenu />
        <Container>
          <Typography style={{ marginTop: "10px" }} variant="h3">
            Home page
          </Typography>
          <p>
            ArchUI aims to combine various approaches to detecting architectural
            knowledge in Jira and Github repositories.
          </p>
          <p>
            Use the tabs in the navbar to view currently available ML models,
            create new ones, or run them on a project. Use the classify Issues
            tab to manually label issues. More detailed information on each tab
            is available under the divider and in the project readme.
          </p>

          <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
        </Container>

        <Grid container justifyContent="space-evenly">
          <Grid item xs={12} sm={5}>
            <Item style={{ marginTop: "10px" }}>
              <Typography variant="h4">ML Models: Word Embeddings</Typography>
              <p>
                Several machine learning model types require a word embedding to
                accurately generate features. Word embeddings can be managed:
                created, trained, deleted. Word embeddings fit with specific
                feature generators:
              </p>
              <List style={{ paddingLeft: "15px" }}>
                <ListItem
                  disablePadding={true}
                  sx={{ listStyleType: "disc", display: "list-item" }}
                >
                  <ListItemText>
                    <em>Word2VecGenerator</em> embedding fits with{" "}
                    <em>Word2Vec</em> feature generator
                  </ListItemText>
                </ListItem>
                <ListItem
                  disablePadding={true}
                  sx={{ listStyleType: "disc", display: "list-item" }}
                >
                  <ListItemText>
                    <em>Doc2VecGenerator</em> embedding fits with{" "}
                    <em>Doc2Vec</em> feature generator
                  </ListItemText>
                </ListItem>
                <ListItem
                  disablePadding={true}
                  sx={{ listStyleType: "disc", display: "list-item" }}
                >
                  <ListItemText>
                    <em>DictionaryGenerator</em> embedding fits with{" "}
                    <em>BOWFrequency</em> and <em>BOWNormalized</em> feature
                    generators
                  </ListItemText>
                </ListItem>
                <ListItem
                  disablePadding={true}
                  sx={{ listStyleType: "disc", display: "list-item" }}
                >
                  <ListItemText>
                    <em>IDFGenerator</em> embedding fits with{" "}
                    <em>TfidfGenerator</em> feature generator
                  </ListItemText>
                </ListItem>
              </List>
              <p>Note that not all feature generators require an embedding.</p>
            </Item>
            <Item style={{ marginTop: "10px" }}>
              <Typography variant="h4">Managing ML Models</Typography>
              <p>
                In this application, the term 'model' can refer to two things:
                either the model configuration, which is used by the ML
                pipeline, or the trained model data files. In the "ML Models"
                page, accessible from the navbar at the top of the site, you can
                access and manage the currently available ML model
                configurations.
              </p>

              <p>
                From this page, the button "Create New Model" allows you to
                create a new model configuration. Hover over the input
                fields/dropdowns/checkboxes to see a tooltip.{" "}
                <em>
                  Note that your choice of classifier will impact which input
                  modes are available to use! First choose a classifier, then an
                  input mode.
                </em>{" "}
                Once you are done, click the "Save Configuration" button at the
                bottom to save the configuration. This will create the config
                and redirect you to the view page for your new config. There,
                you can see all available model configs, and select one for more
                detailed action.
              </p>

              <p>
                Available actions on model configurations are currently to{" "}
                <b>train the model</b> and to <b>edit the configuration</b>.
                Training a model uses the CLI's `run` command, saving the
                trained model files in the database to be used for prediction
                later on. While editing the configuration, you can change any of
                the previously entered options, except for the model config's
                name.
              </p>
            </Item>
            <Item style={{ marginTop: "10px" }}>
              <Typography variant="h4">Login</Typography>
              <p>
                In the Login view, you can log in with your username and
                password, which is required to have to change any data (you can
                read data without being logged in with a valid account). You can
                also set the database and pipeline URLs, that the UI will send
                its data requests to. It is worth noting that you are
                essentially logging in to the database, so if you change the
                database URL, you will need to log in again.
              </p>
            </Item>
            <Item style={{ marginTop: "10px" }}>
              <Typography variant="h4">ML Models: Ontologies</Typography>
              <p>
                You can upload ontology files for use in word embeddings and ML
                models on the Ontologies page under ML models.{" "}
                <em>
                  Note that, for a model and the feature generator(s) it
                  includes, you must use the same ontology for each relevant
                  component: word embeddings and the general ontology training
                  parameter should all be using the same ontology file.
                </em>
              </p>
            </Item>
          </Grid>
          <Grid container item xs={12} sm={5}>
            <Item style={{ marginTop: "10px" }}>
              <Typography variant="h4">ML Models: Predicting</Typography>
              <p>
                In the "Predict With ML Models" tab, you will see options to
                select any number of models, and select the project(s) they will
                be run on. Running these models means that they will be used to
                predict the design decision content of all issues in the target
                project(s). In this prediction form, you also have the option to
                create a <b>"query"</b> for this prediction. A query allows you
                to select and group issues and machine predictions into a view,
                so that not all data is displayed at once, and you can focus on
                what you're interested in.
              </p>
            </Item>
            <Item style={{ marginTop: "10px" }}>
              <Typography variant="h4">Classify Issues</Typography>
              <p>
                In the "classify Issues" page accessible from the site's navbar,
                you will find a list of available queries, as described above,
                and the option to create a new one. Clicking on any available
                query will lead you to the data table view of all issues and
                predictions as described by the query.
              </p>

              <p>
                The issue key in the first column doubles as a link to the issue
                online, automatically opening in a new window. Clicking the
                "classify" button in the second column opens a model, allowing
                you to change the manual classification of an issue or mark it
                for review. Also in this modal, you can view and place comments
                on this issue's manual classification. The current manual label
                of the issue is displayed in the third column (empty for no
                manual label currently existing). The fourth column allows you
                to view the summary and description of the issue in a popover,
                without having to leave the UI. All other columns are machine
                predictions.
              </p>

              <p>
                If an issue is classified and not in review, it will be used in
                the training dataset for machine learning models. Changing an
                issue's classification or commenting on the manual label will
                add you as author to the manual label, so you can find back
                which issues you have already looked at. Clicking the "Mark for
                review" in the UI will flag the issue as needing review in the
                table view and take it out of the ML training set.
              </p>

              <p>
                You can sort the table view by (shift-)clicking the arrows next
                to the column headers. Also note the search bar and pagination
                at the bottom.
              </p>
            </Item>
            <Item style={{ marginTop: "10px" }}>
              <Typography variant="h4">Statistics</Typography>
              <p>
                In the statistics overview, generate a set of graphics to get an
                overview of the issue characteristics per project software
                domain, divided per label type.
              </p>
            </Item>
            <Item style={{ marginTop: "10px" }}>
              <Typography variant="h4">Tags</Typography>
              <p>
                Tags are applied to issues and are used in queries to group
                issues which all have a certain (set of) tags together, for
                easier classification. In the tags overview, you can add and
                delete tags. Edit functionality is coming soon. In the query
                view, per issue, you can add tags to or remove tags from
                individual issues. Tags have a title and a description. In the
                query view, hover over the tag name to see the description in a
                tooltip.
              </p>
            </Item>
            <Item style={{ marginTop: "10px" }}>
              <Typography variant="h4">Search</Typography>
              <p>In the search tab, find relevant issues based on keywords.</p>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </NextUIProvider>
  );
}
