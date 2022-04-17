import React, { useEffect, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import { DefaultLayout } from '../layout';
import { RepoActions } from '../redux/home/actions';
import { selectRepoList } from '../redux/home/selector';
import { IRepoProps, ICard, IList } from '../types/Repos';

const Home: React.FC = () => {
    const initialRepoProps = {
        name: '',
        lists: [],
        id: '',
    };    
    const initialCardProps = {
        text: '',
        id: '',
    };
    const initialListProps = {
        title: '',
        cards: [],
        id: '',
    }
    const [repoModalOpen, setRepoModalOpen] = useState(false);
    const [repoMode, setRepoMode] = useState('');
    const [vulnerabilityModalOpen, setVulnerabilityModalOpen] = useState(false);
    const [vulnerabilityMode, setVulnerabilityMode] = useState('');
    const [repo, setRepo] = useState<IRepoProps>(initialRepoProps);
    const [card, setCard] = useState<ICard>(initialCardProps);
    const [currentListId, setCurrentListId] = useState('');
    const [title, setTitle] = useState('');
    const [list, setList] = useState<IList>(initialListProps);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(RepoActions.resetState());
        dispatch(RepoActions.listAllRepoState());
    }, []);

    const repos = useSelector(selectRepoList);

    /* Functions for the repo related methods */
    const handleClickOpenRepoModalBox = (name?: string, id?: string) => {
        setRepoModalOpen(true);
        if (name !== '' && name !== undefined) {
            setRepoMode('edit');
            setRepo({ ...repo, 'name': name, 'id': id });
        }            
    };

    const handleRepoModalClose = (event: ChangeEvent<HTMLInputElement>, reason: string) => {
        if (reason && reason == "backdropClick") 
            return;
        setRepoModalOpen(false);
    };

    const handleRepoModalCancel = () => setRepoModalOpen(false);

    const handleRepoModalInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setRepo({ ...repo, 'name': value });
    };

    const addOrUpdateRepo = () => {
        if (repoMode === 'edit') {
            const data = {
                id: repo.id,
                name: repo.name,
            };    
            dispatch(RepoActions.editRepoState(data));
        } else {
            const data = {
                name: repo.name,
            };    
            dispatch(RepoActions.addNewRepoState(data));
        }
        setRepoModalOpen(false);
        dispatch(RepoActions.listAllRepoState());
    };

    const deleteRepo = (repo: IRepoProps) => {
        if (repo && repo.id) {
            dispatch(RepoActions.deleteRepoState(repo.id));
            dispatch(RepoActions.listAllRepoState());
        }
    };

    /* Functions for the vulnerability related methods */
    const handleClickOpenCardModalBox = (id: string, text?: string, list?: any) => {
        setList(list);
        setCurrentListId(id);
        setVulnerabilityModalOpen(true);
        if (text !== '' && text !== undefined) {
            setVulnerabilityMode('edit');
            setCard({ ...card, 'text': text, 'id': id });
        }
    };

    const resetCardModalBox = () => {
        setList({});
        setCard({});
        setTitle('');
        setVulnerabilityMode('');
        setVulnerabilityModalOpen(false);
    };

    const handleCardModalClose = (event: ChangeEvent<HTMLInputElement>, reason: string) => {
        if (reason && reason == "backdropClick") 
            return;
        resetCardModalBox();
    };

    const handleCardModalCancel = () => resetCardModalBox();

    const handleCardModalInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCard({ ...card, 'text': value });
    };

    const addOrUpdateCard = () => {
        let data = {};
        if (vulnerabilityMode === 'edit') {
            if (title !== '' && title !== undefined) {
                data = {
                    id: list.id,
                    title: title,
                };    
                dispatch(RepoActions.editCardTitleState(data));
            } else {
                data = {
                    id: card.id,
                    text: card.text,
                };    
                dispatch(RepoActions.editCardState(data));
            }
        } else {
            data = {
                text: card.text,
            };    
            dispatch(RepoActions.addNewCardState(currentListId, data));
        }
        setVulnerabilityModalOpen(false);
        dispatch(RepoActions.listAllRepoState());
    };

    const deleteCard = (card: ICard) => {
        if (card && card.id) {
            dispatch(RepoActions.deleteCardState(card.id));
            dispatch(RepoActions.listAllRepoState());
        }
    };

    const handleTitle = (event: SelectChangeEvent) => setTitle(event.target.value as string);

    return (
        <DefaultLayout>
            <Typography variant='h4' color='secondary' component='h4' style={{ marginBottom: 20 }}>Welcome to the GuardRails Repo board</Typography>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Container>
                    <List style={{ marginBottom: 20 }}>
                        {repos && repos.length > 0 && repos.map((repo: any) => (
                            <>
                                <Accordion key={repo.id} defaultExpanded={true}>
                                    <AccordionSummary                  
                                        id={repo.id}          
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls='panel1a-content'   
                                        sx={{
                                            backgroundColor: 'lightblue'
                                        }}                         
                                    ><Typography variant='h5' component='h5'>{repo.name}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            backgroundColor: 'lightblue'
                                        }}>
                                        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                            <List
                                                direction='row'
                                                component={Stack}
                                            >
                                                {repo.lists && repo.lists.length > 0 && repo.lists.map((eachList: any) => (
                                                    <ListItem key={eachList.id}>
                                                        <ListItemButton>
                                                            <ListItemText 
                                                                primaryTypographyProps={{
                                                                    fontSize: 18,
                                                                    color: 'gray',
                                                                }}
                                                                secondaryTypographyProps={{
                                                                    fontSize: 15,
                                                                    color: 'green',
                                                                }}
                                                                primary={<Typography variant='h6' style={{ color: '#ff6f00' }}>{eachList.title}</Typography>}
                                                            />
                                                        </ListItemButton>
                                                        <List style={{ flexDirection: 'column', backgroundColor: '#34495E', borderRadius: 5 }}>
                                                        {eachList.cards.map((eachCard: any) => (
                                                            <>
                                                                <ListItem key={eachList.id} style={{ flexDirection: 'row' }}>
                                                                    <ListItemButton onClick={() => handleClickOpenCardModalBox(eachCard.id, eachCard.text, eachList)}>
                                                                        <ListItemText                                                                 
                                                                            primary={eachCard.text}
                                                                            primaryTypographyProps={{
                                                                                fontSize: 16,
                                                                                color: '#FFFFFF',
                                                                            }}
                                                                            secondaryTypographyProps={{
                                                                                fontSize: 14,
                                                                                color: 'green',
                                                                            }} 
                                                                        />                                                                          
                                                                    </ListItemButton>
                                                                    <Button variant='text' onClick={() => deleteCard(eachCard)} style={{ textAlign: 'center' }}>
                                                                        <DeleteSharpIcon color='error' />
                                                                    </Button>
                                                                </ListItem>
                                                                <Divider style={{ backgroundColor: '#FFFFFF' }} />
                                                            </>                                                            
                                                        ))}
                                                        </List> 
                                                        <Button variant='contained' onClick={() => handleClickOpenCardModalBox(eachList.id)} style={{ marginTop: 20 }}><AddIcon /></Button>                                                                                               
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Box>
                                        <Box sx={{ width: '100%', display: 'flex', paddingTop: 5, justifyContent: 'space-between' }}>
                                            <Button variant='outlined' onClick={() => handleClickOpenRepoModalBox(repo.name, repo.id)} style={{ textAlign: 'center' }}>
                                                <EditSharpIcon color='secondary' />
                                            </Button>       
                                            <Button variant='outlined' onClick={() => deleteRepo(repo)} style={{ textAlign: 'center' }}>
                                                <DeleteSharpIcon color='error' />
                                            </Button>                                                                                 
                                        </Box>                                        
                                    </AccordionDetails>
                                </Accordion>
                                <Divider style={{ backgroundColor: "#6605B8" }} />
                            </>
                        ))}
                    </List>
                    <Button variant='contained' onClick={() => handleClickOpenRepoModalBox('')}>Add New Repositary</Button>
                    
                    {/** Modal box for the Repositary modal box */}
                    <Dialog open={repoModalOpen} onClose={handleRepoModalClose}>
                        <DialogTitle>Repositary Name</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin='dense'
                                label='Name'
                                type='text'
                                fullWidth
                                variant='standard'
                                value={repo.name}
                                onChange={handleRepoModalInputChange}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleRepoModalCancel}>Cancel</Button>
                            <Button onClick={addOrUpdateRepo}>Save</Button>
                        </DialogActions>
                    </Dialog>


                    {/** Modal box for the card modal box */}
                    <Dialog open={vulnerabilityModalOpen} onClose={handleCardModalClose}>
                        <DialogTitle>Vulnerability Name</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin='dense'
                                label='Name'
                                type='text'
                                fullWidth
                                variant='standard'
                                value={card.text}
                                onChange={handleCardModalInputChange}
                            />
                            {vulnerabilityMode === 'edit' &&
                                <FormControl fullWidth style={{ marginTop: 15}}>
                                    <InputLabel>Title</InputLabel>
                                    <Select
                                        value={title}
                                        label='Title'
                                        onChange={handleTitle}
                                    >
                                        <MenuItem value={'Open'}>Open</MenuItem>
                                        <MenuItem value={'Confirmed'}>Confirmed</MenuItem>
                                        <MenuItem value={'False Positive'}>False Positive</MenuItem>
                                        <MenuItem value={'Fixed'}>Fixed</MenuItem>
                                    </Select>
                                </FormControl>}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCardModalCancel}>Cancel</Button>
                            <Button onClick={addOrUpdateCard}>Save</Button>
                        </DialogActions>
                    </Dialog>
                </Container>
            </Box>
        </DefaultLayout>
    );
};

export default Home;
