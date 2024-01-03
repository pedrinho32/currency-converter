import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
    overflow:hidden;
    font-family: sans-serif;
`;

export const TableWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    margin-top: 20px;
    width: 400px;
`;

export const Table = styled.table`
    font-size: 0.9em;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
`;

export const TableHead = styled.thead`
    background-color: #D6DEE9;
    color: #1F618D;
    text-align: center;
    font-weight: bold;
`;

export const TableCell = styled.td`
    adding: 12px 15px;
    text-align: left;
    padding: 8px 10px;
`;

export const BodyRow = styled.tr`
    border-bottom: 1px solid #dddddd;
`;

export const Label = styled.label`
    text-align: left;
    font-size: 0.9em;
`;

export const Input = styled.input`
    text-align: right;
    padding: 3px 3px;
    width: 90px;
    border-radius: 5px;
    float: right;
`;

export const Select = styled.select`
    text-align: center;
    padding: 3px 3px;
    width: 100px;
    border-radius: 5px;
    float: right;
`;

export const FormRow = styled.div`
    padding: 5px 0px;
    margin-top: 10px;
`;

export const FormWrapper = styled.form`
    display: inline-block;
    text-align: left;
    width: 240px;
`;

export const Button = styled.button`
    border-radius: 10px;
    border: none;
    height: 30px;
    width: 240px;
    background-color:#1F618D;
    color: #fff;
    font-size: 1em;
    &:hover,
    &:focus {
        background-color: #5095BC;
    }
`;

export const ResultWrapperDiv = styled.div`
    width: 390px;
    height: auto;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    display: center;
    padding: 5px;
    text-align: center;
    font-size: 1.4em;
    background-color: #CFE5E1;
    color: #428A6E;
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.20);
`;

export const Note = styled.p`
    text-align: left;
    font-size: 0.75em;
`;