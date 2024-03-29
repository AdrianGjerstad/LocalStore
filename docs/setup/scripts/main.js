//
// /docs/setup/scripts/main.js
//
// All files in this repository are distributed under the GNU GPLv3 License. You
// may get yourself a copy of the license at the link below:
//
//   https://github.com/AdrianGjerstad/LocalStore/blob/master/LICENSE
//
// The Developers of the LocalStore Project (the "Developers") have decided to
// allow the redistribution of the the LocalStore Project (the "Project") under
// a free and open source software license known as the
// GNU General Public License Version 3.0 (the "License"). As stated by the
// license, all copyright and license notices must be reserved, even through
// redistributions
//
// The License allows for the freedom to copy, and redistribute and/or modify
// this file or other substantial portions of the program (the "Software").
// However, "the GPL requires that modified versions be marked as changed, so
// that their problems will not be attributed erroneously to authors of previous
// versions."
//
// Because of this, the Developers ask of you this: Please mark your copy as
// changed when you change it, by writing a star/asterisk (*) after to the name
// of the file on the second line. If there is already a "*" after the name, you
// may go to the official repository at:
//
//   https://github.com/AdrianGjerstad/LocalStore
//
// or you may add another star after the name.
//
// For all redistributions, please copy these license notices exactly, along
// with the below copyright notice.
//
// Copyright (c) 2019 The Developers of the LocalStore Project.
//
// The jQuery library is not covered under this exact license, but instead,
// under the MIT License. You may find its copy here:
//
//   https://jquery.org/license/
//
//

window.onload = function() {
  $(".loader_container").fadeOut(400, function() {
    document.body.removeChild($(".loader_container")[0]);
  });
  $(".loader_back").fadeOut(400, function() {
    document.body.removeChild($(".loader_back")[0]);
  });
}
