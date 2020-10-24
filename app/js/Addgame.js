import React from "react";
import { Link } from "react-router-dom";

export default class Addgame extends React.Component {
    render() {
        return (
            <div>
                <form name="ipcForm" id="ipcForm" onsubmit="JavaScript:sendForm(event)">
                    <div class="form group">
                        <label for="gameTileInput">Game Name</label>
                        <input class="form-control" id="gameTileInput" required="required" placeholder="Super Mario 64" />
                    </div>
                    <button type="button" class="btn btn-primary btn-sm" onclick="addAnotherFormInput()">Add another
                count</button>
                    <div id="wrappedDiv" class="x">
                        <div id="countInputDiv0" class="form-row">
                            <div class="col">
                                <label for="countTitle0">Count Title</label>
                                <input type="text" id="countTitle0" class="form-control" required="required"
                                    placeholder="Deaths" />
                            </div>
                            <div class="col">
                                <label for="countInput0">Starting Count</label>
                                <input type="number" id="countInput0" class="form-control" placeholder="420" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-outline-success btn-lg btn-block">Add New Game</button>
                </form>
            </div>
        );
    }
}