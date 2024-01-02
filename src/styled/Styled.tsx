import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
`;

export const Table = styled.table`
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    margin-left: auto;
    margin-right: auto;
`;

export const TableHead = styled.thead`
    background-color: #EEE8AA;
    color: #B8860B;
    text-align: center;
    font-weight: bold;
`;

export const TableCell = styled.td`
    adding: 12px 15px;
    text-align: center;
    padding: 8px 10px;
`;

export const BodyRow = styled.tr`
    border-bottom: 1px solid #dddddd;
`;

export const Label = styled.label`
    text-align: center;
    padding: 4px 5px;
`;

export const Input = styled.input`
    text-align: left;
    padding: 3px 3px;
    width: 100px;
    margin-left: 20px;
    border-radius: 5px;

`;

export const Select = styled.select`
    text-align: left;
    padding: 3px 3px;
    margin-left: 20px;
    border-radius: 5px;
`;

export const FormRow = styled.div`
    padding: 5px 15px;
`;

export const Form = styled.form`
    display: inline-block;
     text-align: left;
`;

export const Button = styled.button`
    border-radius: 5px;
`;