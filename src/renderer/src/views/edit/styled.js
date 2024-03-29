import styled from 'styled-components'

/*
 * Styled components for the edit view.
 */

export const EditorContainer = styled.div`
    display: flex;
    align-content: justify;
    width: auto;
    height: auto;
    background: var(--back-edit);
`

export const EditCardTitle = styled.h4`
    margin: 0;
    margin-bottom: 10px;
    padding: 8px;
    background: var(--prime);
    color: var(--back);
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    color: white;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
`

export const EditCardDisplayName = styled.h5`
    margin: 0;
    padding: 0;
    text-align: right;
    margin-right: 8px;
    color: var(--text);
`

export const EditingCard = styled.div`
    height: auto;
    min-width: 600px;
    min-height: 85vh;
    width: calc(35%);
    margin: 20px;
    padding: 0;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background: var(--back-edit);
    animate: {
         {
            scale: [1, 1, 2, 2, 3, 2, 1, 1];
        }
    }
    transition: {
        duration: 20;
    }
    & > p {
        margin: 8px 12px;
    }
`

export const PreviewCardTitle = styled.h4`
    margin: 0;
    margin-bottom: 10px;
    padding: 8px;
    background: var(--prime);
    color: var(--back);
    display: flex;
    justify-content: space-between;
    color: white;
    z-index: 2;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    padding: 0.5rem 0.5rem 0.5rem 1rem;
`

export const PreviewCard = styled.div`
    flex: 3;
    padding: 0;
    margin: 20px;
    min-height: 85vh;
    min-width: 750px;
    overflow: hidden;
    background: var(--back-edit);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    animate: {
         {
            scale: [1, 1, 2, 2, 3, 2, 1, 1];
        }
    }
    transition: {
        duration: 20;
    }
    & > p {
        margin: 8px 12px;
    }
`
