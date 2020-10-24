import React from "react";
import { Link } from "react-router-dom";

export default class App extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="dropdown btn-block">
                        <button class="btn-block btn-default dropdown-toggle" id="menu1" type="button" data-toggle="dropdown">
                            Super Mario 64
                    <span class="caret"></span></button>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Bloodborne</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Sunshine</a></li>
                            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Risk of Rain 2</a></li>
                        </ul>
                    </div>
                </div>

                <div class="row border">
                    <div class="col border">
                        <p class="text-danger text-center align-middle">666,420</p>
                    </div>
                    <div class="float-right">
                        <div class="btn-group-vertical">
                            <button id="plusBtn" type="button" class="btn btn-outline-danger" onclick="plusButtonClicked()">+</button>
                            <button id="minusBtn" type="button" class="btn btn-outline-success" onclick="minusButtonClicked()">-</button>
                        </div>
                    </div>
                </div>

                <div class="row">
                    00:00:00 TODO
        </div>

            </div>

        );
    }
}