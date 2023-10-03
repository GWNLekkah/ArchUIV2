"use client";
import React, { Component } from "react";
import { Menu } from "@headlessui/react";

export default class MainMenu extends Component {
  render() {
    return (
      <div className="container flex justify-center mx-auto">
        <Menu>
          <Menu.Button>
            <p className="text-4xl">Arch UI</p>
          </Menu.Button>
          <Menu.Items>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "bg-blue-500"}`}
                  href="/account-settings"
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "bg-blue-500"}`}
                  href="/account-settings"
                >
                  Documentation
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    );
  }
}
