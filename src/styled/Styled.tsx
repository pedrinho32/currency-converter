import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
    overflow:hidden;
    font-family: sans-serif;
`;

export const Table = styled.table`
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 0.9em;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    margin-left: auto;
    margin-right: auto;
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
    text-align: center;
    padding: 8px 10px;
`;

export const BodyRow = styled.tr`
    border-bottom: 1px solid #dddddd;
`;

export const Label = styled.label`
    text-align: center;
    padding: 4px 5px;
    font-size: 15px;
`;

export const Input = styled.input`
    text-align: right;
    padding: 3px 3px;
    width: 92px;
    margin-left: 20px;
    border-radius: 5px;
`;

export const Select = styled.select`
    text-align: center;
    padding: 3px 3px;
    margin-left: 20px;
    width: 100px;
    border-radius: 5px;
`;

export const FormRow = styled.div`
    padding: 5px 15px;
`;

export const FormWrapper = styled.form`
    display: inline-block;
    text-align: left;
`;

export const ButtonContainer = styled.div`
    margin:10px;
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    border-radius: 10px;
    border: none;
    height: 30px;
    width: 120px;
    background-color:#1F618D;
    color: #fff;
    font-size: 15px;
    &:hover,
    &:focus {
        background-color: #5095BC;
    }
`;

export const ResultWrapperDiv = styled.div`
    width: 400px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    display: center;
    padding: 5px;
    text-align: center;
    font-size: 22px;
    background-color: #CFE5E1;
    color: #428A6E;
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.20);
`;